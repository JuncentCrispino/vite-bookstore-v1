import create from 'zustand';

const registerStore = create(set => ({
  showRegister: false,
  setShowRegister: (showRegister) => set(() => ({ showRegister }))
}));

export default registerStore;