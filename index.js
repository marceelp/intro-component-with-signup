const button = document.querySelector("button");

const inputs = [
  document.querySelector(".input1"),
  document.querySelector(".input2"),
  document.querySelector(".input3"),
  document.querySelector(".input4"),
];

const warnings = [
  document.querySelector(".warning1"),
  document.querySelector(".warning2"),
  document.querySelector(".warning3"),
  document.querySelector(".warning4"),
];

button.addEventListener("click", (e) => {
  inputs.forEach((input, i) => {
    if (input.value.trim().length === 0) {
      e.preventDefault();
      warnings[i].style.display = "block";
      input.style.border = "2px solid hsl(0, 100%, 74%)";
    } else {
      warnings[i].style.display = "none";
      input.style.border = "0.2px solid var(--grayish-blue)";
    }
  });
});
