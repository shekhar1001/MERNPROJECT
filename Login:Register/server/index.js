const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const authRouter = require('./routes/authRoute'); // Ensure this path is correct
const employeeRouter = require('./routes/employeeRoute'); // Add the employee routes

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/employees', employeeRouter); // Use the employee routes

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/authentication')
    .then(() => console.log('Connected to MongoDB!'))
    .catch((error) => console.error('Failed to connect to MongoDB:', error));

// Global error handlerq
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        status: 'error',
        message: err.message || 'Internal Server Error',
    });
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});
