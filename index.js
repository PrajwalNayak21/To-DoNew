const express = require('express')
const { checkConn } = require('./src/db')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})
checkConn()

app.listen(3000, console.log("server running"))