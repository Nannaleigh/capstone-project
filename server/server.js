console.log("hit")
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const {seed} = require('./seed.js')
const port = process.env.PORT || 5500;



app.post('/seed', seed)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
app 
    .use(express.static('public'))
    .use(express.json())
    .use(cors())
    .listen(port, () => console.log(`Server hearing you on port ${port}`));
    

   