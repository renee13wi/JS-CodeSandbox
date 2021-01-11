const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");

let number = document.querySelector("#number");

function counter() {
  increase.addEventListener("click", function () {
    number.innerText = parseInt(number.innerText, 10) + 1;
  });

  decrease.addEventListener("click", function () {
    number.innerText = parseInt(number.innerText, 10) - 1;
  });
}

export default counter;
