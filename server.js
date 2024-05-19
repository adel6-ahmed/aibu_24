const express = require('express');
const app = express();
require('express-async-errors');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// MongoDB Connection
const mongoUri = 'mongodb+srv://adellhmt:0M5MJp6n2lnJ9uXB@cluster0.6oxyknn.mongodb.net/sample_airbnb?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    });

// Middleware
app.use(cors());
app.use(express.json());

// Routes
require('./routes')(app);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')));

// Error Handling Middleware
app.use(require('./middlewares/error'));

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
