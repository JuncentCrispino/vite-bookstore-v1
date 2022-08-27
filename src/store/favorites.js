import create from 'zustand';
import { persist } from 'zustand/middleware';

let store = (set) => ({
  favorites: [],
  addToFavorites: (book) => {
    set((state) => ({
      favorites: [...state.favorites, book]
    }));
  },
  removeFromFavorites: (book) => {
    set((state) => ({
      favorites: state.favorites.filter(item => item._id !== book._id)
    }));
  }
});

store = persist(store, { name: 'favorites' });
const favoritesStore = create(store);

export default favoritesStore;