"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "../module/Navbar.module.css";

export default function Header() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const router = useRouter();
  const [search, setSearch] = useState("");
  const [username, setUsername] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkCookie = () => {
      const cookieUsername =
        document.cookie
          .split("; ")
          .find((row) => row.startsWith("username="))
          ?.split("=")[1] || "";
      setUsername(cookieUsername);
    };

    checkCookie();
    const interval = setInterval(checkCookie, 500);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      router.push(
        `/categories/${encodeURIComponent(search.trim().toLowerCase())}`
      );
      setSearch("");
      setMenuOpen(false); // close mobile menu after search
    }
  };

  const handleLogout = () => {
    document.cookie =
      "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie =
      "username=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setUsername(null);
    router.push("/login");
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* LEFT: Logo + Search + Hamburger */}
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/logo.jpg" alt="Logo" height={30} />
          </Link>
        </div>

        <form onSubmit={handleSearch} className={styles.search}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className={styles.searchBtn}>
            <img src="/search.png" alt="Search" height={20} />
          </button>
        </form>

        {/* Hamburger beside search */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((p) => !p)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* RIGHT NAV */}
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
        {username ? (
          <>
            <span className={styles.username}>Hi {username}!</span>
            <button onClick={handleLogout} className={styles.logoutBtn}>
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className={styles.navLink}>
            Login
          </Link>
        )}

        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="/contact" className={styles.navLink}>Contact</Link>

        <Link href="/cart" className={styles.cartLink}>
          <div className={styles.cartIconWrapper}>
            <img src="/cart.png" alt="Cart" height={25} />
            {cartCount > 0 && (
              <span className={styles.cartCount}>{cartCount}</span>
            )}
          </div>
        </Link>
      </nav>
    </header>
  );
}
