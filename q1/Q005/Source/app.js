const  express = require('express')
const app = express()
const port = 3000
app.use(express.json());
var Usercontroller = require('./controller/usercontroller')


app.get('/', (req, res) => res.send('Hello World!'))
app.use('/signup',Usercontroller)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))