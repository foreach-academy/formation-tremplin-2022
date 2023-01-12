// const { readFile, writeFile } = require('fs');

//* callback
// readFile('./content/first.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }

//   console.log(data);
// });

//* On promessifie manuellement
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err.message));

// const util = require('util');
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await getText('./content/first.txt');
//     const second = await getText('./content/second.txt');
//     await writeFilePromise('./content/result-promise.txt', `C'est génial ! ${first} ${second}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

const { readFile, writeFile } = require('fs').promises;

//* pattern async/await
const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    await writeFile(
      './content/result-promise.txt',
      `C'est génial ! ${first} ${second}`,
      {
        flag: 'a'
      }
    );
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error.message);
  }
};

start();
