import counter from "./component/counter";
import TodoList from "./component/TodoList";
import toggleClick from "./component/toggleClick";
import clock from "./component/clock";
import Greeting from "./component/Greeting";

// counter
counter();

const todoWrap = document.querySelector(".todo-wrap");
new TodoList(todoWrap);
toggleClick();
clock();
Greeting();
