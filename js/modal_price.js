function createImageModal(pdfSrc) {
  const modal = document.createElement('div');
  modal.id = 'modalPrice';
  modal.classList.add('modal_price');

  const closeButton = document.createElement('button');
  closeButton.setAttribute('type', 'button');
  closeButton.setAttribute('data-modal-close', true);
  closeButton.classList.add('close-modal', 'close-posicion');
  closeButton.innerHTML = `
    <svg class="icon-modal">
      <use href="../images/icons.svg#icon-close"></use>
    </svg>
  `;

  const pdfContainer = document.createElement('div');
  pdfContainer.classList.add('pdf-container');

  const iframe = createPDFIframe(pdfSrc);
  pdfContainer.appendChild(iframe);

  modal.appendChild(closeButton);
  modal.appendChild(pdfContainer);
  document.body.appendChild(modal);

  let isModalOpen = true;

  const closeOnEsc = event => {
    if (event.key === 'Escape' && isModalOpen) {
      closeModal();
    }
  };

  const closeModal = () => {
    isModalOpen = false;
    document.removeEventListener('keydown', closeOnEsc);
    modal.removeEventListener('animationend', closeModal);
    closeModalFunction(modal);
  };

  closeButton.addEventListener('click', closeModal);

  document.addEventListener('keydown', closeOnEsc);

  modal.addEventListener('animationend', closeModal);

  modal.style.display = 'block';

  return modal;
}

function createPDFIframe(pdfSrc) {
  const iframe = document.createElement('iframe');
  iframe.src = `${pdfSrc}#toolbar=0&navpanes=0&scrollbar=0`;
  iframe.width = '100%';
  iframe.height = '600px';
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('scrolling', 'no');
  return iframe;
}

function closeModalFunction(modal) {
  if (modal && document.body.contains(modal)) {
    document.body.removeChild(modal);
  }
}

const buttons = document.querySelectorAll('.open-modal_price');

buttons.forEach(button => {
  const pdfSrc = button.getAttribute('data-pdf-src');

  button.addEventListener('click', () => {
    createImageModal(pdfSrc);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  closeModalFunction(document.getElementById('modalPrice'));
});