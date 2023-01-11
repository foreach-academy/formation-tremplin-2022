//* démarrage du processus du système d'exploitation
console.log('premier');

setTimeout(() => {
  console.log('second');
}, 0);

//* processus du système d'exploitation terminé et quitté
console.log('troisième');
