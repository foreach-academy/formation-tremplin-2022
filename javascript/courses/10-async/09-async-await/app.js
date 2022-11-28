//* async/await
//* doit avoir async
//* await attends que la promesse soit tenue
//* try/catch - gérer les erreurs

// async function someFunction() {
//   await
// }

// const otherFunction = async () => {
//   await
// }

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
  // displayColor().then((data) => console.log(data));

  const result = await displayColor();
  console.log(result);
});

const addColor = (time, element, color) => {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`Il n'y a pas d'élément : ${element}`));
    }
  });
};

const displayColor = async () => {
  try {
    const first = await addColor(1000, heading1, 'red');
    await addColor(2000, heading2, 'green');
    await addColor(2000, heading3, 'blue');

    console.log(first);

    return 'hello';
  } catch (error) {
    console.log(error);
  }
};
