const express = require('express');
const fs = require('fs');

const apiRoutes = express.Router();

apiRoutes.get('/names', (req, res) => {
    res.json({names: "Ahmar"})
})

module.exports = apiRoutes;