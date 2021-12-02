const fetchNotes = (nameFunc) => {
  fetch("http://localhost:3000/notes")
    .then((res) => res.json())
    .then((data) => nameFunc(data));
};

module.exports = fetchNotes;
