const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api');
const app = express();

app.use('/api', apiRoutes);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(3000);