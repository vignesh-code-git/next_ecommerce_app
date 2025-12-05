"use client";                                                       // Marks this file as a Client Component (needed because Redux Provider is client-side)

import { Provider } from 'react-redux';                             // Import Redux Provider to make store available to all components
import { store } from './redux/store';                              // Import the configured Redux store
import Header from './components/Header';                           // Import Header component
import Footer from './components/Footer';                           // Import Footer component
import "./globals.css";                                             // Import global CSS for the entire app

export default function RootLayout({ children }) {                  // Root layout component receives "children" (page content)
  return (
    <html>                                                          
      <body>                                                        {/* BODY container */}
        <Provider store={store}>                                    {/* Wrap entire app with Redux Provider to enable global state */}
          <Header />                                                {/* Header stays visible on all pages */}
          <main>{children}</main>                                   {/* Main content area - dynamic pages render here */}
          <Footer />                                                {/* Footer stays visible on all pages */}
        </Provider>                                                 {/* End Redux Provider */}
      </body>
    </html>
  );
}
