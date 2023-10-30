function createImageModal(pdfSrc) {
  const modal = document.createElement('div');
  modal.id = 'modalPrice';
  modal.classList.add('modal_price');

  const closeButton = document.createElement('button');
  closeButton.setAttribute('type', 'button');
  closeButton.setAttribute('data-modal-close', true);
  closeButton.classList.add('close-modal', 'close-posicion');
  closeButton.innerHTML = `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <title>icon-close</title>
  <path d="m26.667 7.303-1.97-1.97-7.808 7.808-7.808-7.808-1.97 1.97 7.808 7.808-7.808 7.808 1.97 1.97 7.808-7.808 7.808 7.808 1.97-1.97-7.808-7.808 7.808-7.808z"/>
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
