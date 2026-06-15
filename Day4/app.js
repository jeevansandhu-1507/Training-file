const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const taskRoutes = require('./routes/route');

const app = express();
app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.get('/test-error', (req, res, next) => {
    next(new Error('Testing Internal Server Error'));
});

app.use((err, req, res, next) => {
    console.error(err);
    
    res.status(500).json({
        error: 'Internal Server Error'
    });
});

app.use(errorHandler);
app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});