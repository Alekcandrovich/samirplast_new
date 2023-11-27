import createImageSlider from './modal_product.js';
import { closeModalFunction } from './modal_product.js';

const productDetail_1 = document.querySelector('.product_detail_1');

productDetail_1.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/mayka_1-1.jpg', text: 'Майка  у синю смужку (44+8х2)х70/15' },
    { imageSrc: '../images/mayka_1-2.jpg', text: 'Майка чорна «Saeedoff» (38+8х2)х60/15' },
    { imageSrc: '../images/mayka_1-3.jpg', text: 'Майка «Бджілка» (28+8х2)х47/15' },
    { imageSrc: '../images/mayka_1-4.jpg', text: 'Майка «Козак» (22+8х2)х43/15' },
    { imageSrc: '../images/mayka_1-5.jpg', text: 'Майка «Luxe» 200 шт (24х42)' },
  ];


createImageSlider(images);
});

const productDetail_2 = document.querySelector('.product_detail_2');

productDetail_2.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/mayka_2-1.jpg', text: "Текст для картинки 1" },
    { imageSrc: '../images/mayka_2-2.jpg', text: "Текст для картинки 2" },
  ];


  createImageSlider(images);
});

window.addEventListener('load', () => {
  closeModalFunction(document.getElementById('modalProduct'));
});
