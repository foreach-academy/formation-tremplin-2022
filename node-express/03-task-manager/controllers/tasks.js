const db = require('../db');

// crée une tâche
const createTask = async (req, res) => {
  const { name } = req.body;
  await db.query('INSERT INTO task(name) VALUES($1)', [name]);
  res.status(201).send('Utilisateur ajouté');
};

// récupère toutes les tâches
const getAllTasks = async (_, res) => {
  const { rows } = await db.query('SELECT * FROM task');

  res.status(200).json(rows);
};

// récupère une tâche
const getTask = async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query('SELECT * FROM task WHERE task_id = $1', [
    id,
  ]);

  if (!rows[0]) {
    return res.status(404).json({ msg: `Pas de tâche avec l'id ${id}` });
  }

  res.status(200).send({ task: rows[0] });
};

// modifie une tâche
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, completed } = req.body;
  const { rowCount } = await db.query(
    'UPDATE task SET name = $1, completed = $2 WHERE task_id = $3',
    [name, completed, id]
  );

  if (rowCount === 0) {
    return res.status(404).json({ msg: `Pas de tâche avec l'id ${id}` });
  }

  res.status(200).json({ task: { task_id: id, name, completed } });
};

// supprime une tâche
const deleteTask = async (req, res) => {
  const { id } = req.params;
  const { rowCount } = await db.query('DELETE FROM task WHERE task_id = $1', [
    id,
  ]);

  if (rowCount === 0) {
    return res.status(404).json({ msg: `Pas de tâche avec l'id ${id}` });
  }

  res.status(200).json({ msg: 'Tâche supprimée' });
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
