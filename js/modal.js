const productDetail = document.querySelector('.product_detail');

function openModalFunction() {
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

  const swiperContainer = document.createElement('div');
  swiperContainer.classList.add('swiper-container');

  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper');

  const slide1 = createSlide('../images/odejda_1-1.jpg');
  const slide2 = createSlide('../images/odejda_1-2.jpg');
  const slide3 = createSlide('../images/odejda_1-3.jpg');
  const slide4 = createSlide('../images/odejda_1-4.jpg');
  const slide5 = createSlide('../images/odejda_1-5.jpg');
  const slide6 = createSlide('../images/odejda_1-6.jpg');

  swiperWrapper.appendChild(slide1);
  swiperWrapper.appendChild(slide2);
  swiperWrapper.appendChild(slide3);
  swiperWrapper.appendChild(slide4);
  swiperWrapper.appendChild(slide5);
  swiperWrapper.appendChild(slide6);

  swiperContainer.appendChild(swiperWrapper);

  modal.appendChild(closeButton);
  modal.appendChild(swiperContainer);
  document.body.appendChild(modal);

  new Swiper(swiperContainer, {
    slidesPerView: 1,
    spaceBetween: 350,
    loop: true,
    autoplay: {
      delay: 2000,
    },
  });

  modal.style.display = 'block';

  closeButton.addEventListener('click', closeModalFunction);
}

function createSlide(imageSrc) {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');

  const image = document.createElement('img');
  image.src = imageSrc;
  image.alt = 'Slide Image';
  slide.appendChild(image);

  return slide;
}

function closeModalFunction() {
  const modal = document.getElementById('myModal');
  if (modal) {
    document.body.removeChild(modal);
  }
}

productDetail.addEventListener('click', openModalFunction);

window.addEventListener('click', event => {
  const modal = document.getElementById('myModal');
  if (modal && event.target === modal) {
    closeModalFunction();
  }
});

window.addEventListener('load', () => {
  closeModalFunction();
});
