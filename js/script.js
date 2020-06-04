document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.querySelector('.overlay');
  const overlayImage = document.querySelector('.overlay-image');
  const body = document.querySelector('body');

  document
    .querySelectorAll('.card-image-inner')
    .forEach(function (el) {
      el.addEventListener('click', function () {
        const imageSrc = this.getAttribute('src');
        overlayImage.setAttribute('src', imageSrc);
        overlay.classList.replace('d-none', 'd-block');
        overlay.classList.replace('invisible', 'visible');
        body.classList.add('no-scroll')
      });
    });

  document
    .querySelectorAll('.overlay-background, .overlay')
    .forEach(function (el) {
      el.addEventListener('click', function () {
        overlay.classList.replace('d-block', 'd-none');
        overlay.classList.replace('visible', 'invisible');
        body.classList.remove('no-scroll')
      });
    });
});
