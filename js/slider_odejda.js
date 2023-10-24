import createImageSlider from './modal.js';

const productDetail = document.querySelector('.product_detail_1');

productDetail.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/odejda_1-1.jpg', text: 'Текст для картинки 1' },
    { imageSrc: '../images/odejda_1-2.jpg', text: 'Текст для картинки 2' },
    { imageSrc: '../images/odejda_1-3.jpg', text: 'Текст для картинки 3' },
    { imageSrc: '../images/odejda_1-4.jpg', text: 'Текст для картинки 4' },
    { imageSrc: '../images/odejda_1-5.jpg', text: 'Текст для картинки 5' },
    { imageSrc: '../images/odejda_1-6.jpg', text: 'Текст для картинки 6' },
  ];


createImageSlider(images);
});

const productDetail2 = document.querySelector('.product_detail_2');

productDetail2.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/odejda_2-1.jpg', text: 'Текст для картинки 1' },
    { imageSrc: '../images/odejda_2-2.jpg', text: 'Текст для картинки 2' },
  ];


  createImageSlider(images);
});

window.addEventListener('load', () => {
  closeModalFunction(document.getElementById('myModal'));
});
