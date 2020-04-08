export const requestuserData = userId => {
  const request = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(new Error('User not found'), 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId: `${userId}`,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });
  return request;
};