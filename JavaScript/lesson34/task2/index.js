const baseUrl = 'https://5e97f8bc77f5430016339cb5.mockapi.io/api/v1/users';

/* getUsersList code here */

export const getUsersList = () => {
  return fetch(baseUrl)
      .then(response => response.json());
}

/* getUserById code here */

export const getUserById = userId => {
  return fetch(`${baseUrl}/${userId}`)
  .then(response => response.json())
}


/* createUser code here */

export const createUser = userObj => {
  return fetch(baseUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
  })
}

/* updateUser code here */

export const updateUser = (userId, updatedUserData) => {
  return fetch(`${baseUrl}/${userId}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
  })
}

/* deleteUser code here */

export const deleteUser = userId => {
  return fetch(`${baseUrl}/${userId}`, {
      method: 'DELETE',
  })
}