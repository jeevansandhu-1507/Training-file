const tasks = require('../data/task');

const getTasks = (req, res) => {
  res.status(200).json(tasks);
};

module.exports = {
  getTasks
};