const modal = documet.querySelector('.backdrop');
const modalBtnOpen = documet.querySelector('.modal-btn-open');
const modalBtnClose = documet.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click',toggleModal);
modalBtnClose.addEventListener('click',toggleModal);