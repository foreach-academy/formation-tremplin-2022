// Le JS sert à contrôler le contenu dynamique d'un site pour qu'un utilisateur puisse intéragir avec

document.querySelectorAll('.btn').forEach((item) => {
  item.addEventListener('click', () => {
    alert('hello people');
  });
});
