const updateHtml = (data) => {
  // const lastItem = data[data.length - 1];
  // const note = document.createElement("p");
  // note.innerText = `${lastItem.title}: ${lastItem.content}`;
  // document.body.appendChild(note);

  const note = document.createElement("p");
  note.class = "note";
  note.href = "note.html";
  note.innerText = `${data.title}: ${data.content}`;
  document.body.appendChild(note);
};

module.exports = updateHtml;
