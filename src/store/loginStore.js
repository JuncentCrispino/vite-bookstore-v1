import create from 'zustand';

const loginStore = create(set => ({
  showLogin: false,
  setShowLogin: (showLogin) => set(() => ({ showLogin }))
}));

export default loginStore;