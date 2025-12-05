// redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";                  // Import createSlice to auto-generate actions & reducers

const initialState = { items: [] };                              // Initial global cart state: items is an empty array

const cartSlice = createSlice({
  name: "cart",                                                  // Slice name → used as prefix for action types
  initialState,                                                  // Set initial state for this slice

  reducers: {                                                    // All reducer functions that modify the state

    // ------------------------- ADD TO CART -------------------------
    addToCart: (state, action) => {                              // action.payload contains the product object
      const product = action.payload;                            // Extract incoming product

      const exist = state.items.find(                            // Check if the product already exists in cart
        item => item.id === product.id                           // Compare by unique id
      );

      if (exist) {                                               // If product is already in the cart
        state.items = state.items.map(item =>                    // Create a new items array
          item.id === product.id                                 // Find the matching item
            ? { ...item, quantity: item.quantity + 1 }           // Increase quantity by 1
            : item                                               // Leave all other items unchanged
        );
      } else {                                                   // If product is NOT in the cart
        state.items = [...state.items, {                         // Add product to items array
          ...product,                                            // Copy product fields
          quantity: 1                                            // Set default quantity to 1
        }];
      }
    },

    // ------------------------- REMOVE FROM CART -------------------------
    removeFromCart: (state, action) => {                          // action.payload = id of item to remove
      state.items = state.items.filter(                           // Filter out the item to remove
        item => item.id !== action.payload                        // Keep all other items
      );
    },

    // ------------------------- UPDATE QUANTITY -------------------------
    updateQuantity: (state, action) => {                          // action.payload = { id, quantity }
      const { id, quantity } = action.payload;                    // Extract id and new quantity

      state.items = state.items.map(item =>                       // Create a new items array
                                                                                      // Find the item with matching id
     item.id === id ? {...item, quantity: quantity < 1 ? 1 : quantity } : item        // Return updated item
      );
     },                                                                               // Keep rest of product data same
                                                                                      // Prevent quantity going below 1
            
                                                                                      // Return all other items as they are
    // ------------------------- CLEAR CART -------------------------
    clearCart: (state) => {                                       // Clears all items from cart
      state.items = [];                                           // Reset cart to empty array
    }
  }
});

export const {                                                    // Export auto-generated action creators
  addToCart,                                                      // Action to add product to cart
  removeFromCart,                                                 // Action to remove product by id
  updateQuantity,                                                 // Action to update quantity
  clearCart                                                       // Action to empty the cart
} = cartSlice.actions;

export default cartSlice.reducer;                                 // Export reducer for store configuration
