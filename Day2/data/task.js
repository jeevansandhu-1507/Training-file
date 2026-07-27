const { v4:uuidv4 }  = require('uuid');

const tasks = Object.freeze([
  Object.freeze({
    id: uuidv4(),
    title: 'Learn Express.js',
    status: 'Pending'
  }),
  Object.freeze({
    id: uuidv4(),
    title: 'Build Task API',
    status: 'In Progress'
  }),
  Object.freeze({
    id: uuidv4(),
    title: 'Test Endpoints',
    status: 'Completed'
  })
]);

module.exports = tasks;