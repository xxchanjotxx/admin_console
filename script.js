const form = document.querySelector("form");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const isbn = document.querySelector("#isbn");
const category = document.querySelector("#category");
const copies = document.querySelector("#copies");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    title.value &&
    author.value &&
    isbn.value &&
    category.value &&
    copies.value
  ) {
    const item = {
      name: title.value,
      author: author.value,
      isbn: parseInt(isbn.value),
      category: category.value,
      copies: parseInt(copies.value),
    };

    db.collection("books")
      .add(item)
      .then((res) => {
        title.value = "";
        author.value = "";
        isbn.value = "";
        category.value = "";
        copies.value = "";
      });
  }
});
