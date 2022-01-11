const form = document.getElementById("formTriangle");
const inputAngles = document.querySelectorAll(".inputAngle");
const outputDiv = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let sum = inputAngles.reduce((acc, curr) => {
    return acc + parseInt(curr.value);
  }, 0);

  if (sum === 180) {
    outputDiv.innerText = "Yay! The angles can make a triangle";
  } else {
    outputDiv.innerText = "Oops! The angles cannot make a triangle";
  }
});
