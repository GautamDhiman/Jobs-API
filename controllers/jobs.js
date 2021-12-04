

const getAllJobs = async (req, res) => {
    res.send('Get all jobs!');
}


const getJob = async (req, res) => {
    res.send('Get a job!');
}


const createJob = async (req, res) => {
    res.send('created a job!');
}


const updateJob = async (req, res) => {
    res.send('updated a job!');
}


const deleteJob = async (req, res) => {
    res.send('deleted a Job!');
}

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };