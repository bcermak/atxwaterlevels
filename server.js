require('dotenv').config();
import express from 'express';
const app = express();
 
// Serving static files (HTML, CSS, JS)
app.use(express.static('public'));

// Starting the server
const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`listening on port ${port}...`))