"use strict";
const form = document.querySelector("#todo-form");
const input = document.querySelector(".todo-body__input");
const addBtn = document.querySelector(".todo-body__btn");

const clearBtn = document.querySelector(".todo-btn__clearBtn");

const listUl = document.querySelector(".todo-lists");

let listArr = [];
let listId = 0;

function TodoPrototype(text, id) {
  this.id = id;
  this.text = text;
}

function removeTodo(todoId) {
  document.querySelector(`#todo-id-${todoId}`).remove();

  for (let i = 0; i <= listArr.length; i++) {
    if (listArr[i].id == todoId) {
      listArr.splice(i, 1);
    }
  }
}

function todoCreateDOM(todoText, todoId) {
  let listItem = document.createElement("li");
  let delBtn = document.createElement("a");
  let chBtn = document.createElement("a");

  listItem.classList.add("todo-list");
  listItem.textContent = todoText;
  listItem.setAttribute("id", `todo-id-${todoId}`);

  delBtn.classList.add("todo-list__delateBtn");
  delBtn.innerHTML = '<i class="fas fa-times"></i>';

  delBtn.addEventListener("click", function () {
    removeTodo(todoId);
  });

  chBtn.classList.add("todo-list__checkBtn");
  chBtn.innerHTML = '<i class="fas fa-check"></i>';

  chBtn.addEventListener("click", function () {
    listItem.classList.add("todo-list__span");
  });

  listItem.appendChild(chBtn);
  listItem.appendChild(delBtn);
  listUl.appendChild(listItem);
}

function todoCreate(todoText, todoId) {
  todoCreateDOM(todoText, todoId);
  listArr.push(new TodoPrototype(todoText, todoId));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    addBtn.click();
  }
  todoCreate(input.value, listId);

  form.reset();
  listId++;
  console.log(listArr);
});

clearBtn.addEventListener("click", function () {
  listArr.splice(0, listArr.length);
  document.querySelector("ul").innerHTML = "";
});
