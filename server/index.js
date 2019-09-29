//import libraries
const express = require('express')
const path = require('path');

//create instance of server
const app = express()

//create a port
const port = 4000

//send server the static files to pop up when browser is first loaded
app.use(express.static(__dirname, '../client/dist'))

app.get('/', (req, res) => res.send('Hello World!'))

//connect server to port to listen for any reqs
app.listen(port, () => console.log(`Example app listening on port ${port}!`))