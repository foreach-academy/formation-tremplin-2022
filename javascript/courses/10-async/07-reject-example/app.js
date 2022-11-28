const btn = document.querySelector('.btn');
const container = document.querySelector('.img-container');
const url = 'https://picsum.photos/200';

btn.addEventListener('click', () => {
  // console.log(loadImage(url));
  loadImage(url)
    .then((chips) => container.appendChild(chips))
    .catch((err) => console.log(err));
});

const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    let img = new Image();

    img.addEventListener('load', () => {
      console.log(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(
        new Error(`Échec du chargement de l'image depuis la source : ${url}`)
      );
    });

    img.src = url;
  });
};
