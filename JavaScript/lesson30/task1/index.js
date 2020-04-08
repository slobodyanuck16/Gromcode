export const addImage = imgSrc => {
  const p = new Promise((resolveCb, rejectCb) => {
      const imgElem = document.createElement('img');
      imgElem.setAttribute('alt', 'My Photo');
      imgElem.src = imgSrc;
      const containerElem = document.querySelector('.page');
      containerElem.append(imgElem);
      const onImageLoaded = () => {
          const { width, height } = imgElem;
          resolveCb({ width, height });
      };

      imgElem.addEventListener('load', onImageLoaded);

      imgElem.addEventListener('error', () => rejectCb('Image load failed'))
  });
  return p;
};

const imgSrc = 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg';

const result = addImage(imgSrc);

result.then(data => console.log(data));

console.log(result);