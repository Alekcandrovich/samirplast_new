import createImageSlider from './modal_product.js';
import { closeModalFunction } from './modal_product.js';

const productDetail_1 = document.querySelector('.product_detail_1');

productDetail_1.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/rukav_1-1.jpg', text: "Текст для картинки 1" },
    { imageSrc: '../images/rukav_1-2.jpg', text: "Текст для картинки 2" },
    { imageSrc: '../images/no_images_400.jpg', text: "Текст для картинки 3" },
  ];

  createImageSlider(images);
});

const productDetail_2 = document.querySelector('.product_detail_2');

productDetail_2.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/rukav_2-1.jpg', text: 'Текст для картинки 1' },
    { imageSrc: '../images/no_images_400.jpg', text: 'Текст для картинки 2' },
    { imageSrc: '../images/no_photo_400.jpg', text: 'Текст для картинки 3' },
  ];

  createImageSlider(images);
});

window.addEventListener('load', () => {
  closeModalFunction(document.getElementById('modalProduct'));
});
