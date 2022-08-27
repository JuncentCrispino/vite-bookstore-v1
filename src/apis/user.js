export async function getUserDetails() {
  try {
    return await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/user/details`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
  } catch (error) {
    console.log(error);
  }
}