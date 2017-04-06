'use strict';

const { Router } = require('express');
const { join } = require('path')

const chickenRouter = Router()

chickenRouter.get('/chickens', (req, res, next) => {
  res.sendFile(join(__dirname, '../public', 'chickens.html'))
})

module.exports = chickenRouter
