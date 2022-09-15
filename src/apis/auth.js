import { removeTokens } from '../utility/Utils';
import { getUserDetails } from './user';

export const isUserLoggedIn = async () => {
  try {
    if (!localStorage.getItem('accessToken')) {
      return null;
    }
    const userDetails = await getUserDetails();
    console.log(userDetails.status);
    if (userDetails.status === 200) {
      const data = await userDetails.json();
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
      return await userDetails.json();
    }
    removeTokens();
    return null;
  } catch (error) {
    alert(error);
    throw error;
  }
};

export const refreshAccessToken = async () => {
  try {
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
      return true;
    }
    removeTokens();
    return false;
  } catch (error) {
    alert(error);
    throw error;
  }
};

export const register = async (body) => {
  try {
    const req = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (req.status === 200) {
      const signupRes = await req.json();
      return {
        statusCode: req.status,
        res: signupRes
      };
    }
    return {
      statusCode: req.status,
      res: null
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const logout = async () => {
  try {
    const logoutReq = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/logout`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({
        refreshToken: localStorage.getItem('refreshToken')
      })
    });

    if (logoutReq.status === 200) {
      const logoutRes = await logoutReq.json();
      alert(logoutRes.message);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      return true;
    }
    return false;
  } catch (error) {
    alert(error);
  }
};
