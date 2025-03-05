const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(cors());
app.use(bodyParser.json());
const port  = process.env.PORT || 3000 //port number


// routes
app.use('/api/todos', taskRoutes);


app.listen(port, ()=> {console.log(`server running on port ${port}`)})

