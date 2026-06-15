const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const taskRoutes = require('./routes/route');

const app = express();
app.use(errorHandler);
app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});