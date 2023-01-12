let { people } = require('../data');

//* GET
const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

//* POST
const createPerson = (req, res) => {
  // console.log(req.body);
  const { name } = req.body;

  if (!name) {
    res.status(401).send({ success: false, msg: 'Veuillez fournir un nom' });
  }

  res.status(201).json({ success: true, data: [...people, name] });
};

//* PUT
const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `pas de personne avec l'id : ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      return { ...person, name };
    }

    return person;
  });

  res.status(200).send({ success: true, data: newPeople });
};

//* DELETE
const deletePerson = (req, res) => {
  const { id } = req.params;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `pas de personne avec l'id : ${id}` });
  }

  const newPeople = people.filter((person) => person.id !== Number(id));

  res.status(200).send({ success: true, data: newPeople });
};

module.exports = {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson
};
