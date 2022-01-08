const express = require('express')
const auth = require('./auth')

module.exports = (app) => {
    const protected = express.Router()
    app.use('/api', protected)

    protected.use(auth)

    // Routes Billing Cycle
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(protected, '/billingCycles')


    const open = express.Router()
    app.use('/oapi', open)

    const AuthService = require('../api/user/authService')
    open.post('/login', AuthService.login)
    open.post('/signup', AuthService.signup)
    open.post('/validate-token', AuthService.validateToken)

}