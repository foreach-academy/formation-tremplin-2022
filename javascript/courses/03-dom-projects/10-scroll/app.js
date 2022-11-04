// ********** défini la date ************
const date = document.querySelector('.date');
date.textContent = new Date().getFullYear();

// ********** ouvre/ferme les liens ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed la navbar ************
const navbar = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// ********** smooth scroll ************
// sélectionne les liens
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // navigue jusqu'à une section spécifique
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    // calcule  la hauteur
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position
    });

    linksContainer.style.height = 0;
  });
});
