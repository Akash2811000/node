const express = require('express')
const app = express()
const port = 3000
var Usercontroller = require("./controller/usercontroller")
app.use(express.json())


app.get('/', (req, res) => res.send('Hello p4!'))
app.use('/users',Usercontroller);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))