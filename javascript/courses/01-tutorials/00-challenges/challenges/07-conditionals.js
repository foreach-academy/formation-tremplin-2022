const person1 = {
  name: 'susan',
  age: 25,
  status: 'résident'
};

const person2 = {
  name: 'bob',
  age: 17,
  status: 'tourist'
};

if (person1.age >= 18 && person1.status === 'résident') {
  console.log('vous pouvez voter');
} else {
  console.log("vous n'êtes pas éligible");
}
