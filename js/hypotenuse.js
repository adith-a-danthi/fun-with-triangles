const form = document.getElementById("formTriangle");
const inputLength = document.querySelectorAll(".inputLength");
const outputDiv = document.getElementById("result");

form.addEventListener("submit", (e) => {
	e.preventDefault();
    
	const breadth = Number(inputLength[0].value);
	const height = Number(inputLength[1].value);

	outputDiv.innerText = "The hypotenuse is " + Math.sqrt(breadth * breadth + height * height).toFixed(3);
});
