const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play');
const iframe = document.querySelector('iframe');

buttonsModal.forEach((item, i) =>{
  item.addEventListener('click', () => {
    modalWindow.classList.add('active');
  });
});

modalWindow.addEventListener('click', () => {
  modalWindow.classList.remove('active');
  iframe.removeAttribute('src');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/99Qy0SSI1Uw');
});

