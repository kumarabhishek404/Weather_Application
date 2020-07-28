const path = require('path');

const express = require('express');

const Controller = require('../controllers/getData');

const router = express.Router();

// /admin/add-product => GET
router.get('/weather', Controller.getData);

// /admin/add-product => POST
router.post('/weather', Controller.getFormData);

module.exports = router;

// console.log(Controller.getData());