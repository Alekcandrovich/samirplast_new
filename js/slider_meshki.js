import createImageSlider from './modal_product.js';
import { closeModalFunction } from './modal_product.js';

const productDetail_1 = document.querySelector('.product_detail_1');

productDetail_1.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/meshki_1.jpg', text: 'Текст для картинки 1' },
    { imageSrc: '../images/meshki_2.jpg', text: 'Текст для картинки 2' },
    { imageSrc: '../images/meshki_3.jpg', text: 'Текст для картинки 3' },
  ];

  createImageSlider(images);
});

// const productDetail_2 = document.querySelector('.product_detail_2');

// productDetail_2.addEventListener('click', () => {
//   const images = [
//     { imageSrc: '../images/meshki_1.jpg', text: 'Текст для картинки 1' },
//     { imageSrc: '../images/meshki_2.jpg', text: 'Текст для картинки 2' },
//   ];

//   createImageSlider(images);
// });

window.addEventListener('load', () => {
  closeModalFunction(document.getElementById('myModal'));
});
