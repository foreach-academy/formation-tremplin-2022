const express = require('express');
const router = express.Router();

const {
  createJob,
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobs.js');

router.route('/').get(getAllJobs).post(createJob);
router.route('/:id').get(getJob).put(updateJob).delete(deleteJob);

module.exports = router;
