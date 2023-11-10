import createImageSlider from './modal_product.js';
import { closeModalFunction } from './modal_product.js';

const productDetail_1 = document.querySelector('.product_detail_1');

productDetail_1.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/musor_1-1.jpg', text: '30 літрів' },
    { imageSrc: '../images/musor_1-2.jpg', text: '60 лiтрiв' },
    { imageSrc: '../images/musor_1-3.jpg', text: '120 лiтрiв' },
    { imageSrc: '../images/musor_1-4.jpg', text: '240 лiтрiв' },
    { imageSrc: '../images/musor_1-5.jpg', text: 'Рулон віддільних пакетів' },
  ];

  createImageSlider(images);
});

window.addEventListener('load', () => {
  closeModalFunction(document.getElementById('modalProduct'));
});
