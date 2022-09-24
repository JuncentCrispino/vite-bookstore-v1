import create from 'zustand';
import { persist } from 'zustand/middleware';

let store = (set) => ({
  cart: [],
  addToCart: (book) => {
    set((state) => ({
      cart: [...state.cart, book]
    }));
  },
  emptyCart: () => {
    set(() => ({
      cart: []
    }));
  },
  removeFromCart: (book) => {
    set((state) => ({
      cart: state.cart.filter(item => item._id !== book._id)
    }));
  },
  addItemQty: (book) => {
    set((state) => ({
      cart: state.cart.map(item => {
        if (item._id === book._id) {
          item.qty += 1;
        }
        return item;
      })
    }));
  },
  subtractQty: (book) => {
    set((state) => ({
      cart: state.cart.map(item => {
        if (item._id === book._id) {
          item.qty -= 1;
        }
        return item;
      })
    }));
  },
  inputQty:(book, qty) => {
    set((state) => ({
      cart: state.cart.map(item => {
        if (item._id === book._id) {
          item.qty = qty;
        }
        return item;
      })
    }));
  }
});

store = persist(store, { name: 'cart' });
const cartStore = create(store);

export default cartStore;