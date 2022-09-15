import create from 'zustand';

const productStore = create(set => ({
  products: [],
  setProducts: (newProducts) => set((state) => ({ products: [...newProducts] })),
  categories: [],
  setCategories: (categories) => set((state) => ({ categories: [...state.categories, ...categories] })),
  category: '',
  setCategory: (category) => set(() => ({ category })),
  page: 1,
  setPage: (page) => set(() => ({ page })),
  categoryPage: 1,
  totalPages: 0,
  setTotalPages: (totalPages) => set(() => ({ totalPages })),
  setCategoryPage: (categoryPage) => set(() => ({ categoryPage })),
  emptyProducts: () => set(() => ({ products: [] })),
  emptyCategories: () => set(() => ({ categories: [] }))
}));

export default productStore;