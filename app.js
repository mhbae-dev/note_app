const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

let notes = [
  {
    title: "Groceries list",
    content: "Tomatoes, yoghurt, honey, milk",
  },
  {
    title: "Birthday present",
    content: "Remember to buy birthday present for Max",
  },
];

app.get("/notes", (req, res) => {
  res.send(JSON.stringify(notes));
});

app.post("/notes", (req, res) => {
  const newNote = {
    title: req.body.title,
    content: req.body.content,
  };

  notes.push(newNote);
  res.send(JSON.stringify(newNote));
});

app.listen(port);

console.log(`Server listening on http://localhost:${port}`);
