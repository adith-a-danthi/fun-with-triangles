const form = document.getElementById("formTriangle");
const inputAngles = document.querySelectorAll(".inputAngle");
const outputDiv = document.getElementById("result");

form.addEventListener("submit", (e) => {
	e.preventDefault();
    let sum = 0;
    
	inputAngles.forEach((element) => {
		sum += parseInt(element.value);
	});

	if (sum === 180) {
		outputDiv.innerText = "Yay! The angles can make a triangle";
	} else {
		outputDiv.innerText = "Oops! The angles cannot make a triangle";
	}
});
