'use strict';

const router = require('express').Router();
const prefix = 'aplications';
const validateCreateAplication = require('../middlewares/aplication.validator');

const controller = require('../controllers/aplication.controller');

router.post( 
  `/${prefix}`, 
  validateCreateAplication ,
  controller.create 
);

module.exports = router;