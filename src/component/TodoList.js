import template from "./TodoTemplate";

class TodoList {
  constructor(todoWrap) {
    this.el = {
      input: todoWrap.querySelector(".todo-input"),
      ul: todoWrap.querySelector(".todo-list"),
      addButton: todoWrap.querySelector(".todo-add")
    };
    this.eventAdd();
  }

  eventAdd() {
    const { input, addButton } = this.el;
    let toDos = [];

    addButton.addEventListener("click", (e) => {
      const todoText = input.value.trim();

      if (todoText === "") {
        alert("입력해주세요.");
      } else {
        this.handleAdd(todoText, toDos);
      }
    });
  }

  handleAdd(todoText, toDos) {
    const { input, ul } = this.el;

    const li = document.createElement("li");

    li.innerHTML = template;

    const newId = toDos.length + 1;
    const span = li.querySelector("span");
    const checkbox = li.querySelector(".todo-checkbox");
    li.id = newId;
    span.innerText = todoText;

    const todoObj = {
      id: newId,
      text: todoText,
      status: "none"
    };

    ul.appendChild(li);
    toDos.push(todoObj);
    input.value = "";
    input.focus();

    const removeButton = li.querySelector(".todo-delete");
    removeButton.addEventListener("click", (e) => {
      this.handleRemove(e, toDos);
    });

    let status = "none";
    checkbox.addEventListener("click", (e) => {
      const removeItem = e.target.parentNode;
      console.log(removeItem);

      if (status === "none") {
        checkbox.checked = "checked";
        status = "checked";
      } else {
        checkbox.checked = "none";
        status = "none";
      }

      console.log(toDos);
    });
  }

  handleRemove(e, toDos) {
    const removeItem = e.target.parentNode;
    removeItem.remove();

    const cleanTodo = toDos.filter((item) => {
      return item.id !== parseInt(removeItem.id);
    });

    toDos = cleanTodo;
  }
}

export default TodoList;
