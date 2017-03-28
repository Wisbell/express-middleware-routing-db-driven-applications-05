'use strict';

const { Router } = require('express');
const { join } = require('path')

const homeRouter = Router()

homeRouter.get('/', (req, res, next) => {
  res.sendFile(join(__dirname, '../public', 'home.html'))
  next()
})

module.exports = homeRouter
