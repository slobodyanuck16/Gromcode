export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    console.log(imgSrc);
    
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
        const {width, height} = imgElem;
        console.log(imgElem);
        
        callback(null, {width, height});
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => callback('Image load failed'))
};

const imgSrc = 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg';

const onImageLoaded = (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    const {width,height} = data;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width}: x ${height}`;
};

addImage(imgSrc, onImageLoaded);