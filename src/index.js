import counter from "./component/counter";
import TodoList from "./component/TodoList";
import toggleClick from "./component/toggleClick";
import clock from "./component/clock";

// counter
counter();

const todoWrap = document.querySelector(".todo-wrap");
new TodoList(todoWrap);
toggleClick();
clock();
