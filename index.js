const fetchNotes = require("./fetchNotes");
const updateHtml = require("./updateHtml");
const getNotes = require("./getNotes");

fetchNotes(getNotes);

let buttonEl = document.querySelector(".noteButton");
let inputTitleEl = document.querySelector(".noteTitle");
let inputContentEl = document.querySelector(".noteContent");

buttonEl.addEventListener("click", (event) => {
  event.preventDefault();
  let inputTitle = inputTitleEl.value;
  let inputContent = inputContentEl.value;
  const data = {
    title: inputTitle,
    content: inputContent,
  };

  fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => updateHtml(data));

  // fetchNotes(updateHtml);
});

//Logic for getting back to index.html
// let backButton = document.querySelector(".backButton");
// let link = document.querySelector();
// let title = document.querySelector(".title");
// let content = document.querySelector(".content");

// backButton.addEventListener("click", () => {
//   window.location.href = "index.html";
// });

// link.addEventListener("click", () => {});
