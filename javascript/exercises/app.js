let f = (arr) => arr.map((el) => el + '!');

console.log(f(['a', 'b', 'c']));
console.log(f(['A cat']));
console.log(f(['']));
console.log(f([]));

f = (arr) => {
  return arr
    .filter((num) => num % 2 === 1)
    .map((num) => num ** 2)
    .reduce((total, num) => total + num, 0);
};

console.log(f([0, 0]));
console.log(f([3]));
console.log(f([4]));
console.log(f([1, 2, 3, 4, 5]));
5;
console.log(f([2, 2, 2, 2]));
console.log(f([]));
console.log(f.toString().includes('filter'));
console.log(f.toString().includes('map'));
console.log(f.toString().includes('reduce'));

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

console.log(mergeObjects({ name: 'Amir', age: 36 }, { name: 'Betty' }));

const names = ['Amir', 'Betty', 'Cindy', 'Dalili'];

// const [firstUser, secondUser] = names;

// const users = [firstUser, secondUser];
// console.log(users);

const dataPoints = [
  [10, 20],
  [30, 40]
];

const [, [, y2]] = dataPoints;
console.log(y2);

const [firstUser, secondUser, ...otherUsers] = names;

const users = [firstUser, secondUser, otherUsers];
console.log(users);

const user = {
  name: 'Betty',
  cat: {
    name: 'Keanu',
    age: 2
  }
};

const {
  cat: { name }
} = user;
console.log(name);

const catDescription = ({ name, age }) => `${name} (${age})`;

console.log([
  catDescription({ name: 'Ms. Fluff', age: 4 }),
  catDescription({ name: 'Keanu', age: 2 })
]);

const double = (n) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n * 2), 500);
  });
};

async function quadruple(n) {
  return await double(await double(n));
}

console.log(await Promise.all([quadruple(1), quadruple(2), quadruple(3)]));

const url = 'https://randomuser.me/api?page=1';

const fethUser = async () => {
  try {
    const resp = await fetch(url);
    const {
      results: [user]
    } = await resp.json();

    const { first, last } = user.name;
    const { age } = user.dob;

    return { name: `${first} ${last}`, age };
  } catch (error) {
    console.log(error);
  }
};

const person = await fethUser();
console.log(person.name);
console.log(person.age);
