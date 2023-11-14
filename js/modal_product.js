function createImageSlider(images) {
  const modal = document.createElement('div');
  modal.id = 'modalProduct';
  modal.classList.add('modal_product');

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
    prevArrow: `
      <div class="slider-arrow prev">
        <svg class="icon-modal">
          <use href="../images/icons.svg#icon-left"></use>
        </svg>
      </div>
    `,
    nextArrow: `
      <div class="slider-arrow next">
        <svg class="icon-modal">
          <use href="../images/icons.svg#icon-right"></use>
        </svg>
      </div>
    `,
    pauseOnHover: false,
  });

  modal.style.display = 'block';

  const closeOnEsc = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const closeModal = () => {
    document.removeEventListener('keydown', closeOnEsc);
    modal.removeEventListener('click', modalClickHandler);
    closeModalFunction(modal);
  };

  const modalClickHandler = event => {
    if (event.target.closest('[data-modal-close]')) {
      closeModal();
    }
  };

  modal.addEventListener('click', modalClickHandler);

  document.addEventListener('keydown', closeOnEsc);

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
  textElement.style.textAlign = 'center';
  textElement.style.marginTop = '10px';
  textElement.style.width = '100%';
  slide.appendChild(textElement);

  return slide;
}

function closeModalFunction(modal) {
  if (modal && document.body.contains(modal)) {
    document.body.removeChild(modal);
  }
}

export default createImageSlider;
export { closeModalFunction };