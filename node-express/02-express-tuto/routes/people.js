const express = require('express');
const router = express.Router();

const {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson
} = require('../controllers/people');

router.route('/').get(getPeople).post(createPerson);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
