function validateTask(req, res, next) {
    const { title } = req.body;
    
    if(!title) {
        res.status(400).json({
             error: 'Title is required' 
            });
    }
    
    if(title.length < 5) {
        res.status(400).json({
            error: 'Title must be at least 5 characters long'
        });
    }

    next();
} 

module.exports = validateTask;