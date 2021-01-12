const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  // if (title.className !== CLICKED_CLASS) {
  //   title.className = CLICKED_CLASS;
  // } else {
  //   title.className = "";
  // }

  // const hasClass = title.classList.contains(CLICKED_CLASS);
  // if (hasClass) {
  //   title.classList.remove(CLICKED_CLASS);
  // } else {
  //   title.classList.add(CLICKED_CLASS);
  // }

  title.classList.toggle(CLICKED_CLASS);
}

function toggleClick() {
  title.addEventListener("click", handleClick);
}

export default toggleClick;
