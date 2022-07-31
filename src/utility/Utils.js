
export const isUserLoggedIn = async () => {
  try {
    if (!localStorage.getItem('accessToken')) {
      return null;
    }
    const validAccessToken = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/user/details`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });

    if (validAccessToken.status === 200) {
      const data = await validAccessToken.json();
      return data;
    }
    const validRefreshToken = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/refresh-token`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('refreshToken')}`
      }
    });
    if (validRefreshToken.status === 200) {
      const { accessToken, refreshToken } = await validRefreshToken.json();
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      return await validAccessToken.json();
    }
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    return null;
  } catch (error) {
    alert(error);
    throw error;
  }
};