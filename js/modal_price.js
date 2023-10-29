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
      <use href="/images/icons.svg#icon-close"></use>
    </svg>
  `;

  const pdfContainer = document.createElement('div');
  pdfContainer.classList.add('pdf-container');

  const iframe = createPDFIframe(pdfSrc);
  pdfContainer.appendChild(iframe);

  modal.appendChild(closeButton);
  modal.appendChild(pdfContainer);
  document.body.appendChild(modal);

  closeButton.addEventListener('click', () => {
    closeModalFunction(modal);
  });

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
  if (modal) {
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

window.addEventListener('load', () => {
  closeModalFunction(document.getElementById('modalPrice'));
});
