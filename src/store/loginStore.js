import create from 'zustand';

const loginStore = create(set => ({
  showLogin: true,
  setShowLogin: (showLogin) => set(() => ({ showLogin }))
}));

export default loginStore;