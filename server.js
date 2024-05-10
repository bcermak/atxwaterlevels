require('dotenv').config();
import express from 'express';
const app = express();
 
// Starting the server
const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`listening on port ${port}...`))