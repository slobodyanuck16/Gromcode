const userData = {
  name:'Sam'
};

const userId = 'asd';

function addPropertyV1 (userData, userId) {
  userData.id = userId;
  return userData;
}

// addPropertyV1 (userData, userId);
// console.log(userData);

function addPropertyV2 (userData, userId) {
  userData.id = userId
  const newObj = Object.assign({}, userData);

  return newObj;
}

const addPropertyV3 = (userData, userId) => {
  const newObj = Object.assign({}, userData);
  newObj.id = userId;

  return newObj;
};

const addPropertyV4 = (userData, userId) => {
  const newObj = {...userData };
  newObj.id = userId;

  return newObj;
};