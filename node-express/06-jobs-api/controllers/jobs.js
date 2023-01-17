const db = require('../db');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../errors');

const createJob = async (req, res) => {
  const { company, position } = req.body;
  const { userID } = req.user;

  const {
    rows: [job],
  } = await db.query(
    'INSERT INTO jobs (company, position, user_id) VALUES ($1, $2, $3) RETURNING *',
    [company, position, userID]
  );

  res.status(StatusCodes.CREATED).send({ job });
};

const getAllJobs = async (req, res) => {
  const { userID } = req.user;

  const { rows: jobs } = await db.query(
    'SELECT * FROM jobs WHERE user_id = $1',
    [userID]
  );

  res.status(StatusCodes.OK).send({ jobs, count: jobs.length });
};

const getJob = async (req, res) => {
  const { id } = req.params;

  const {
    rows: [job],
  } = await db.query('SELECT * FROM jobs WHERE job_id = $1', [Number(id)]);

  if (!job) {
    throw new NotFoundError(`Pas de job avec l'id : ${id}`);
  }

  res.status(StatusCodes.OK).send({ job });
};

const updateJob = async (req, res) => {
  const { company, position, status } = req.body;
  const { id: jobID } = req.params;

  if (!company || !position) {
    throw new BadRequestError(
      'Les champs société et poste ne peuvent être vides'
    );
  }

  const {
    rows: [job],
  } = await db.query(
    'UPDATE jobs SET company = $1, position = $2, status = $3 WHERE job_id = $4 RETURNING *',
    [company, position, status, jobID]
  );

  if (!job) {
    throw new NotFoundError(`Pas de job avec l'id : ${jobID}`);
  }

  res.status(StatusCodes.OK).send({ job });
};

const deleteJob = async (req, res) => {
  const { id: jobID } = req.params;

  const {
    rows: [job],
  } = await db.query('DELETE FROM jobs WHERE job_id = $1 RETURNING *', [jobID]);

  if (!job) {
    throw new NotFoundError(`Pas de job avec l'id : ${jobID}`);
  }

  res.status(StatusCodes.OK).send({ job });
};

module.exports = { createJob, getAllJobs, getJob, updateJob, deleteJob };
