// Server setup
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port =process.env.PORT || 5000



app.use(express.static(path.join(__dirname, '/')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})



app.listen(port, function () {
    console.log(`Running on port ${port}`)
})