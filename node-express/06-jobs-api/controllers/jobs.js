const createJob = async (req, res) => {
  res.send('crée un job');
};

const getAllJobs = async (req, res) => {
  res.send('récupère tous les jobs');
};

const getJob = async (req, res) => {
  res.send('récupère un job');
};

const updateJob = async (req, res) => {
  res.send('met à jour un job');
};

const deleteJob = async (req, res) => {
  res.send('supprime un job');
};

module.exports = { createJob, getAllJobs, getJob, updateJob, deleteJob };
