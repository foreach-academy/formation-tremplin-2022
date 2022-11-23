console.log(Math.max(4, 5, 6, 88, 7));

const numbers = [28, 45, 66, 88, 2345];
console.log(Math.max(...numbers));

const john = ['john', 'doe'];

const sayHello = (name, lastName) => console.log(`Salut ${name} ${lastName}`);

sayHello(john[0], john[1]);
sayHello(...john);
