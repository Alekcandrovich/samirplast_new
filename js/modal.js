// function createModalWithSlides(slides) {
//   const modal = document.createElement('div');
//   modal.id = 'myModal';
//   modal.classList.add('modal');

//   const closeButton = document.createElement('button');
//   closeButton.setAttribute('type', 'button');
//   closeButton.setAttribute('data-modal-close', true);
//   closeButton.classList.add('close-modal', 'close-posicion');
//   closeButton.innerHTML = `
//     <svg class="icon-modal">
//       <use href="../images/icons.svg#icon-close"></use>
//     </svg>
//   `;

//   const swiperContainer = document.createElement('div');
//   swiperContainer.classList.add('swiper-container');

//   const swiperWrapper = document.createElement('div');
//   swiperWrapper.classList.add('swiper-wrapper');

//   slides.forEach(slideData => {
//     const slide = createSlide(slideData.imageSrc, slideData.text);
//     swiperWrapper.appendChild(slide);
//   });

//   swiperContainer.appendChild(swiperWrapper);

//   modal.appendChild(closeButton);
//   modal.appendChild(swiperContainer);
//   document.body.appendChild(modal);

//   const swiper = new Swiper(swiperContainer, {
//     slidesPerView: 1,
//     spaceBetween: 800,
//     loop: true,
//     autoplay: {
//       delay: 2000,
//     },
//   });

//   modal.style.display = 'block';

//   closeButton.addEventListener('click', () => {
//     closeModalFunction(modal);
//   });

//   return modal;
// }

// function createSlide(imageSrc, text) {
//   const slide = document.createElement('div');
//   slide.classList.add('swiper-slide');

//   const image = document.createElement('img');
//   image.src = imageSrc;
//   image.alt = 'Slide Image';
//   slide.appendChild(image);

//   const textElement = document.createElement('p');
//   textElement.innerText = text;
//   slide.appendChild(textElement);

//   return slide;
// }

// function closeModalFunction(modal) {
//   if (modal) {
//     document.body.removeChild(modal);
//   }
// }

// const productDetail = document.querySelector('.product_detail');

// productDetail.addEventListener('click', () => {
//   const slides = [
//     { imageSrc: '../images/odejda_1-1.jpg', text: 'Текст для картинки 1' },
//     { imageSrc: '../images/odejda_1-2.jpg', text: 'Текст для картинки 2' },
//     { imageSrc: '../images/odejda_1-3.jpg', text: 'Текст для картинки 3' },
//     { imageSrc: '../images/odejda_1-4.jpg', text: 'Текст для картинки 4' },
//     { imageSrc: '../images/odejda_1-5.jpg', text: 'Текст для картинки 5' },
//     { imageSrc: '../images/odejda_1-6.jpg', text: 'Текст для картинки 6' },
//   ];

//   createModalWithSlides(slides);
// });

// window.addEventListener('load', () => {
//   closeModalFunction(document.getElementById('myModal'));
// });



function createImageSlider(images) {
  const modal = document.createElement('div');
  modal.id = 'myModal';
  modal.classList.add('modal');

  const closeButton = document.createElement('button');
  closeButton.setAttribute('type', 'button');
  closeButton.setAttribute('data-modal-close', true);
  closeButton.classList.add('close-modal', 'close-posicion');
  closeButton.innerHTML = `
    <svg class="icon-modal">
      <use href="../images/icons.svg#icon-close"></use>
    </svg>
  `;

  const sliderContainer = document.createElement('div');
  sliderContainer.classList.add('slider-container');

  const slider = document.createElement('div');
  slider.classList.add('slider');

  images.forEach(imageData => {
    const { imageSrc, text } = imageData;
    const slide = createImageSlide(imageSrc, text);
    slider.appendChild(slide);
  });

  sliderContainer.appendChild(slider);
  modal.appendChild(closeButton);
  modal.appendChild(sliderContainer);
  document.body.appendChild(modal);

  $(slider).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: { delay: 2000 },
    infinite: true,
    prevArrow: '<div class="prev">Previous</div>',
    nextArrow: '<div class="next">Next</div>',
    pauseOnHover: false,
  });

  modal.style.display = 'block';

  closeButton.addEventListener('click', () => {
    closeModalFunction(modal);
  });

  return modal;
}

function createImageSlide(imageSrc, text) {
  const slide = document.createElement('div');
  slide.classList.add('slide');

  const image = document.createElement('img');
  image.src = imageSrc;
  image.alt = 'Slide Image';
  slide.appendChild(image);

  const textElement = document.createElement('p');
  textElement.textContent = text;
  slide.appendChild(textElement);

  return slide;
}

function closeModalFunction(modal) {
  if (modal) {
    document.body.removeChild(modal);
  }
}

const productDetail = document.querySelector('.product_detail');

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

window.addEventListener('load', () => {
  closeModalFunction(document.getElementById('myModal'));
});
