"use client";                                                       // Mark this file as a Client Component (Next.js requirement for Redux store)

import { configureStore } from '@reduxjs/toolkit';                  // Import Redux Toolkit's store creator
import cartReducer from './cartSlice';                              // Import the cart slice reducer

export const store = configureStore({                               // Create the Redux store
  reducer: {                                                        // Root reducer object (can contain multiple slices)
    cart: cartReducer,                                              // Register cart slice → state.cart will be managed by cartReducer
  },
});                                                                  // Store is now ready to be provided to your app
