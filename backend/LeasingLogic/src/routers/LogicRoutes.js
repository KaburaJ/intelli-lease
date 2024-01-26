const express = require('express');
const logicRoutes = express.Router();
const addLandLeasingDetails =require('../controllers/addLandLeasingDetails');
const getUserDetails = require('../controllers/getUserDetails');


logicRoutes.post('/lease-out', addLandLeasingDetails)
logicRoutes.get('/userdetails', getUserDetails)


module.exports = logicRoutes;