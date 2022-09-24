import create from 'zustand';
import { persist } from 'zustand/middleware';

let store = (set) => ({
  user: null,
  setUser: (data) => {
    set(() => ({
      user: data
    }));
  },
  accessToken: null,
  setAccessToken: (data) => {
    set(() => ({
      accessToken: data
    }));
  },
  refreshToken: null,
  setRefreshToken: (data) => {
    set(() => ({
      refreshToken: data
    }));
  },
  logout: () => {
    set(() => ({
      user: null,
      accessToken: null,
      refreshToken: null
    }));
  }
});

store = persist(store, { name: 'user' });
const userStore = create(store);
export default userStore;