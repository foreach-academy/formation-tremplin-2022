//* Fonctions fléchées

//* fonction régulière : "this" réfère le parent, à gauche du .
//* fonction fléchée : "this" réfère au scope l'entourant au moment de son exécution

// const bob = {
//   firstName: 'bob',
//   lastName: 'smith',
//   sayName: function () {
//     console.log(this);
//     const self = this;

//     setTimeout(function () {
//       //! on obtient undefined car le parent n'est plus l'objet bob
//       console.log(this);
//       console.log(`Salut, mon nom est ${this.firstName} ${this.lastName}`);

//       console.log(self);
//       console.log(`Salut, mon nom est ${self.firstName} ${self.lastName}`);
//     }, 2000);
//   }
// };

//! this fais référecne à l'objet window
// const bob = {
//   firstName: 'bob',
//   lastName: 'smith',
//   sayName: () => {
//     console.log(this);

//     setTimeout(() => {
//       console.log(this);
//       console.log(`Salut, mon nom est ${this.firstName} ${this.lastName}`);
//     }, 2000);
//   }
// };

const bob = {
  firstName: 'bob',
  lastName: 'smith',
  sayName: function () {
    console.log(this);

    setTimeout(() => {
      console.log(this);
      console.log(`Salut, mon nom est ${this.firstName} ${this.lastName}`);
    }, 2000);
  }
};

bob.sayName();
