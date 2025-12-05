"use client";                                                 // Client component because it uses hooks & browser APIs
import { useState } from "react";                             // React hook for managing component state
import { useRouter } from "next/navigation";                  // Next.js hook for programmatic navigation
import styles from "../module/Login.module.css";              // Import CSS module for styling

export default function LoginPage() {
  const router = useRouter();                                 // Initialize router for navigation
  const [username, setUsername] = useState("");               // State for username input
  const [password, setPassword] = useState("");               // State for password input

  function handleLogin(e) {                                   // Handle login form submission
    e.preventDefault();                                       // Prevent default form submission

    if (username === "vignesh" && password === "123") {       // Simple static login check
      document.cookie = "token=valid; path=/;";               // Set cookie token
      document.cookie = `username=${username}; path=/;`;      // Set cookie username

      setUsername("");                                        // Clear username state
      setPassword("");                                        // Clear password state
      router.push("/");                                       // Redirect to home page
    } else {
      alert("Wrong credentials");                             // Alert if login fails
    }
  }

  return (
    <div className={styles.loginContainer}>                    {/* Main container for login page */}
      <div className={styles.loginCard}>                       {/* Card wrapper for login form */}

        <h1>Welcome back</h1>                                  {/* Page heading */}
        <p className={styles.subtitle}>Welcome back! Please enter your details.</p> {/* Subtitle */}

        <form onSubmit={handleLogin} className={styles.formGroup}> {/* Login form */}

          <label className={styles.label}>Email / Username</label> {/* Label for username */}
          <input
            type="text"                                        //* Username input 
            className={styles.inputType}                       /* Input styling */
            placeholder="Enter your username"                  /* Placeholder text */
            value={username}                                   /* Bind to username state */
            onChange={(e) => setUsername(e.target.value)}      /* Update username state */
            required                                           /* Make input required */
          />

          <label className={styles.label}>Password</label>     {/* Label for password */}
          <input
            type="password"                                    /* Password input */
            className={styles.inputType}                       /* Input styling */
            placeholder="Password"                             /* Placeholder text */
            value={password}                                   /* Bind to password state */
            onChange={(e) => setPassword(e.target.value)}      /* Update password state */
            required                                           /* Make input required */
          />

          <p className={styles.forgot}>Forgot password</p>     {/* Forgot password link/text */}

          <button className={styles.loginBtn} type="submit">   {/* Login button */}
            Login
          </button>

          <button className={styles.googleBtn} type="button">   {/* Google sign-in button */}
            <img src="/google.png" alt="Google" />              {/* Google icon */}
            Sign in with Google
          </button>

          <p className={styles.signupText}>                      {/* Signup prompt */}
            Don’t have an account? <span>Sign up for free</span> {/* Highlight signup text */}
          </p>

        </form>

      </div>
    </div>
  );
}
