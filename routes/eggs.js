'use strict';

const { Router } = require('express');
const { join } = require('path')

const eggRouter = Router()

eggRouter.get('/eggs', (req, res, next) => {
  res.sendFile(join(__dirname, '../public', 'eggs.html'))
})

module.exports = eggRouter
