import create from 'zustand';

const productStore = create(set => ({
  products: null,
  setProducts: (products) => set(() => ({ products }))
}));

export default productStore;