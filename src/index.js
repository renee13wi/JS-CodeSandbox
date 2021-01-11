import counter from "./component/counter";
import TodoList from "./component/TodoList";

// counter
counter();

const todoWrap = document.querySelector(".todo-wrap");
new TodoList(todoWrap);
