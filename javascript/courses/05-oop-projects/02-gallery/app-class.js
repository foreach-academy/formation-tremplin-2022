const getElement = (selector, list = false) => {
  const el = list
    ? [...document.querySelectorAll(selector)]
    : document.querySelector(selector);

  // vérifie si seulement un élément
  if (list && el.length === 1) return el[0];
  //  vérifie si la liste n'est pas vide
  if (list && el.length > 0) return el;
  // si il n'existe pas ni liste ni éléments
  if (!list && el) return el;
  throw new Error(
    `Veuillez vérifier le sélecteur "${selector}", un tel élément n'existe pas`
  );
};

class Gallery {
  constructor(element) {
    this.container = element;
    this.list = [...element.querySelectorAll('.img')];
    // target
    this.modal = getElement('.modal');
    this.modalImg = getElement('.main-img');
    this.imageName = getElement('.image-name');
    this.modalImages = getElement('.modal-images');
    this.closeBtn = getElement('.close-btn');
    this.prevBtn = getElement('.prev-btn');
    this.nextBtn = getElement('.next-btn');

    // bind
    this.closeModal = this.closeModal.bind(this);

    // event
    this.container.addEventListener(
      'click',
      function (e) {
        if (e.target.classList.contains('img')) {
          this.openModal(e.target, this.list);
        }
      }.bind(this)
    );
  }

  openModal(selectedImage, list) {
    this.setMainImage(selectedImage);
    this.closeBtn.addEventListener('click', this.closeModal);
    this.modalImages.innerHTML = list
      .map(function (image) {
        return `<img src=${
          image.src
        } title="${image.title}" data-id="${image.dataset.id}" class="modal-img ${selectedImage.dataset.id === image.dataset.id && 'selected'}" />`;
      })
      .join('');
    this.modal.classList.add('open');
  }

  closeModal() {
    this.modal.classList.remove('open');
    this.closeBtn.removeEventListener('click', this.closeModal);
  }

  setMainImage(selectedImage) {
    this.modalImg.src = selectedImage.src;
    this.imageName.textContent = selectedImage.title;
  }
}

const nature = new Gallery(getElement('.nature', false));
const city = new Gallery(getElement('.city', false));
