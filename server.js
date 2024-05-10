require('dotenv').config();
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
 
// Serving static files (HTML, CSS, JS)
app.use(express.static('public'));

// Starting the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});