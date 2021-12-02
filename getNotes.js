const getNotes = (data) => {
  data.forEach((item) => {
    const note = document.createElement("p");
    note.class = "note";
    note.href = "note.html";
    note.innerText = `${item.title}: ${item.content}`;
    document.body.appendChild(note);
  });
};

module.exports = getNotes;
