const express = require('express')
const cartRouters = express.Router()
const ctrl = require('./cart.controllers')
const {Authentication, IsAdmin, IsUser} = require('../../middleware/middle.auth')

cartRouters.post('', Authentication, IsUser, ctrl.AddToCart)

module.exports = cartRouters