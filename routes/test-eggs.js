'use strict';

const { Router } = require('express');
const { join } = require('path')

const testEggsRouter = Router()

testEggsRouter.get('/testeggs', (req, res, next) => {
  res.sendFile(join(__dirname, '../public', 'test-eggs.html'))
})

module.exports = testEggsRouter
