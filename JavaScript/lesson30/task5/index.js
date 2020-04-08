export const addImageV2 = imgSrc => {
  const addImage = new Promise ((resolveCb, rejectCb) => {
    const img = document.createElement('img');
    img.setAttribute('alt', 'User avatar');
    img.src = imgSrc;
  
    const pageElem = document.querySelector('.page');
    pageElem.append(img);
    
    const onImageLoaded = () => {
        const { width, height } = img;
        resolveCb({ width, height });
    }
    
    const onImageLoadError = () => rejectCb('Image load failed');
    
    img.addEventListener('load', onImageLoaded);
    
    img.addEventListener('error', onImageLoadError);
  });
  return addImage;
}

const imgSrc = 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg';

const result = addImageV2(imgSrc);

result.catch(data => console.log(data));

console.log(result);