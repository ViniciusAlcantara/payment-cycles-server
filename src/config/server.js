const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('./cors')
const queryInt = require('express-query-int')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors)
app.use(queryInt())

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})

module.exports = app