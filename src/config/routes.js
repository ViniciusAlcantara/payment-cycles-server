const express = require('express')

module.exports = (app) => {
    const router = express.Router()
    app.use('/api', router)

    // Routes Billing Cycle
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}