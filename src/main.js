import { countDisplayRef, decrementRef, incrementRef, resetRef } from "./lib";

let count = 0;

function setCount(newCount) {
  count = newCount;
  updateDisplay();
}

function updateDisplay() {
  countDisplayRef.textContent = count;
}

incrementRef.addEventListener("click", () => {
  setCount(count + 1);
});

decrementRef.addEventListener("click", () => {
  setCount(count - 1);
});

resetRef.addEventListener("click", () => {
  setCount(0);
});

updateDisplay();
