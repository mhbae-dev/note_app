(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // fetchNotes.js
  var require_fetchNotes = __commonJS({
    "fetchNotes.js"(exports, module) {
      var fetchNotes2 = (nameFunc) => {
        fetch("http://localhost:3000/notes").then((res) => res.json()).then((data) => nameFunc(data));
      };
      module.exports = fetchNotes2;
    }
  });

  // updateHtml.js
  var require_updateHtml = __commonJS({
    "updateHtml.js"(exports, module) {
      var updateHtml2 = (data) => {
        const note = document.createElement("p");
        note.class = "note";
        note.href = "note.html";
        note.innerText = `${data.title}: ${data.content}`;
        document.body.appendChild(note);
      };
      module.exports = updateHtml2;
    }
  });

  // getNotes.js
  var require_getNotes = __commonJS({
    "getNotes.js"(exports, module) {
      var getNotes2 = (data) => {
        data.forEach((item) => {
          const note = document.createElement("p");
          note.class = "note";
          note.href = "note.html";
          note.innerText = `${item.title}: ${item.content}`;
          document.body.appendChild(note);
        });
      };
      module.exports = getNotes2;
    }
  });

  // index.js
  var fetchNotes = require_fetchNotes();
  var updateHtml = require_updateHtml();
  var getNotes = require_getNotes();
  fetchNotes(getNotes);
  var buttonEl = document.querySelector(".noteButton");
  var inputTitleEl = document.querySelector(".noteTitle");
  var inputContentEl = document.querySelector(".noteContent");
  buttonEl.addEventListener("click", (event) => {
    event.preventDefault();
    let inputTitle = inputTitleEl.value;
    let inputContent = inputContentEl.value;
    const data = {
      title: inputTitle,
      content: inputContent
    };
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((res) => res.json()).then((data2) => updateHtml(data2));
  });
})();
