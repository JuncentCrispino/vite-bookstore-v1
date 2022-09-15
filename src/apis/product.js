export const getAllCategories = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/product/categories`);
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error);
    throw error;
  }
};