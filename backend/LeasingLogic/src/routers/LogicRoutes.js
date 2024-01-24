const express = require('express');
const logicRoutes = express.Router();
const addLandLeasingDetails =require('../controllers/addLandLeasingDetails')


logicRoutes.post('/lease-out', addLandLeasingDetails)


module.exports = logicRoutes;