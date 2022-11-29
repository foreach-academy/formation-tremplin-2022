// supprime la classe active pour chaque items
export default (btns) => {
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });
};
