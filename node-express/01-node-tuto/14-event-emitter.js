const EventEmitter = require('events');

const customEmitter = new EventEmitter();

//* on - écoute un évènement
//* emit - émet un évènement
customEmitter.on('response', (name, id) => {
  console.log(`données reçues : ${name} ${id}`);
});

customEmitter.on('response', () => {
  console.log('encore de logique ici');
});

// l'event de on() doit correspondre à celui d'emit()
//! l'ordre est important ! On écoute d'abord puis on émet
customEmitter.emit('response', 'john', 34);
