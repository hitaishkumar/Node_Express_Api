import express from "express";
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js';

const app = express()
const PORT  = 5000;

app.use(bodyParser.json( ))

// all Routes that start with 'users' will execute userRoutes
app.use('/users' , usersRoutes)

app.get('/' , (req,res) => {
    console.log('TEstonf ')

    res.send("Hello From Home Page")

})

app.listen(PORT,() => {console.log(` Server is Running as http://localhost:${PORT}`)})