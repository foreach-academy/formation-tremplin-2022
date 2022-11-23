//* Déstructurer des objets

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane'
  }
};

// ancienne façon
// const firstName = bob.first;
// const lastName = bob.last;
// const siblings = bob.siblings.sister;

// console.log(firstName, lastName, siblings);

// avec destructuration
//? les props doivent correspondrent
const {
  //? renomme une prop
  first: firstName,
  last,
  //? destructure une prop qui est un objet et renomme la prop
  siblings: { sister: favoriteSibling },
  zip
} = bob;

console.log(firstName, last, favoriteSibling);
