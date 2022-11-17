//* this
//* pointe vers la gauche du .

const john = {
  firstName: 'john',
  lastName: 'doe',
  fullName() {
    console.log(this);
    console.log(`Mon nom complet est ${this.firstName} ${this.lastName}`);
  }
};

const bob = {
  firstName: 'bob',
  lastName: 'anderson',
  fullName() {
    console.log(this);
    console.log(`Mon nom complet est ${this.firstName} ${this.lastName}`);
  }
};

john.fullName();
bob.fullName();
