const obj = {
};

const key = 'key';
const value = 'value';

const userId = 'asd';

function addPropertyV1 (obj, key, value) {
  obj[key] = value;
  return obj;
}

function addPropertyV2 (obj, key, value) {
  obj[key] = value;
  const newObj = Object.assign({}, obj);

  return newObj;
}

const addPropertyV3 = (obj, key, value) => {
  const newObj = Object.assign({}, obj);
  newObj[key] = value;

  return newObj;
};

const addPropertyV4 = (obj, key, value) => {
  const newObj = {...obj };
  newObj[key] = value;

  return newObj;
};

addPropertyV1 (obj, key, value);
console.log(obj);
addPropertyV2 (obj, key, value);
console.log(obj);
addPropertyV3 (obj, key, value);
console.log(obj);
addPropertyV4 (obj, key, value);
console.log(obj);