//* "" ou ''
let name = 'john';
//? prettier formate "" en ''. C'est une question de préférence (à changer dans settings)
//! on ne peut pas mixer les guillements (ex: "')

name = "je m'appelle thomas";
console.log(name);
//? Soit on échappe ' soit on utilise des ""

//? il existe aussi `` qui est aussi une feature de ES6
//* string concatenation - combine des chaînes de caractères
//* `` - backticks (template string) une option plus simple que l'on verra plus tard
name = 'john';
const lastName = 'doe';
let fullName;

console.log('salut ! Ton nom est : ' + name + ' ' + lastName);

//? on peut aussi stocker le nom et prénom dans fullName
fullName = name + ' ' + lastName;
console.log('salut ! Ton nom est : ' + fullName);

const website = 'google';
const url = 'https://www.' + website + '.com';
console.log(url);
//? on peut change website et cliquer dessus

// TODO: challenge #2
