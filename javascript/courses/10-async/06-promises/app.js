//* callbacks, promises, async/await

//* PROMESSES - Pending (En attente), Resolved (Résolue), Rejected (Rejetée)
//* then catch - passe une autre fonction callback

const promise = new Promise((resolve, reject) => {
  // ici on mettre une fonctionnalité (fetch data, etc..)
  let value = true;

  if (value) {
    resolve('hey value est vraie');
  } else {
    reject('il y a eu une erreur, value est fausse');
  }
});

promise.then((data) => console.log(data)).catch((err) => console.log(err));
