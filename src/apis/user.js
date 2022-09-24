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

export async function updateUserDetails(body) {
  try {
    const req = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(body)
    });
    return ({
      statusCode: req.status,
      response: await req.json()
    });
  } catch (error) {
    throw new Error(error);
  }
}