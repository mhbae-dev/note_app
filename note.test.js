/**
 * @jest-environment jsdom
 */

test("displays a new note after submitting", () => {
  document.body.innerHTML = `<h1 class="title">Notes</h1>
   <form>
     <label for="noteTitle">Title</label><br />
     <input class="noteTitle" type="text" /><br />
     <label for="noteContent">Content</label><br />
     <input class="noteContent" type="text" /><br />
     <button class="noteButton">Create Note</button>
   </form>`;

  require("./index");

  const button = document.querySelector(".noteButton");
  button.click();

  expect(document.querySelectorAll(".note").length).toBe(3);
});
