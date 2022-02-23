
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const port = 5252;

const {
  getComments, createComment
} = require('./controller')

app.get("/api/comments", (getComments));
app.post("/api/comments", createComment);

app.listen(port, () => console.log(`Server hearing you on port ${port}`));
    

   