const productDetail = document.querySelector('.product_detail');

function openModalFunction() {
  const modal = document.createElement('div');
  modal.id = 'myModal';
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const closeButton = document.createElement('button');
  closeButton.setAttribute('type', 'button');
  closeButton.setAttribute('data-modal-close', true);
  closeButton.classList.add('close-modal', 'close-posicion');
  closeButton.innerHTML = `
    <svg class="icon-modal">
      <use href="../images/icons.svg#icon-close"></use>
    </svg>
  `;

  const form = document.createElement('form');
  form.classList.add('form');

  const formTitle = document.createElement('h2');
  formTitle.classList.add('form-name');
  formTitle.innerText = 'Залиште свої дані, ми вам передзвонимо';

  modalContent.appendChild(closeButton);
  modalContent.appendChild(form);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  modal.style.display = 'block';

  closeButton.addEventListener('click', closeModalFunction);
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

