const express = require('express');
const router = express.Router();
const validateTask = require('../middleware/validateTask');

router.post('/', validateTask, (req, res) => {
    res.status(201).json({
        message: 'Task created successfully',
        task: req.body
    });
});
// router.get('/', (req, res) => {
//     res.status(200).json({
//         message: 'Tasks retrieved successfully',
//         tasks: [] // This would typically be replaced with actual task data from a database
//     });
// });
module.exports = router;
    // Here you would typically save the task to a database