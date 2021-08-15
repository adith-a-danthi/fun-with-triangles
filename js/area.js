const areaForms = document.querySelectorAll(".areaForm");
const radios = document.querySelectorAll(".radio");
const result = document.querySelectorAll(".result");
const errorDiv = document.getElementById("error");

const inputType1 = document.querySelectorAll(".inputType1");
const inputType2 = document.querySelectorAll(".inputType2");
const inputType3 = document.querySelectorAll(".inputType3");

console.log(areaForms);

document.getElementById("type1").addEventListener("change", () => {
	console.log("type1");
	toggleForm(0, 1, 2);
});

document.getElementById("type2").addEventListener("change", () => {
	toggleForm(1, 0, 2);
});

document.getElementById("type3").addEventListener("change", () => {
	toggleForm(2, 1, 0);
});

function toggleForm(showDiv, hideDiv1, hideDiv2) {
	areaForms[showDiv].style.display = "block";
	areaForms[hideDiv1].style.display = "none";
	areaForms[hideDiv2].style.display = "none";
}

areaForms[0].addEventListener("submit", (e) => {
	e.preventDefault();
	const a = Number(inputType1[0].value);
	const b = Number(inputType1[1].value);
	const area = 0.5 * a * b;
	result[0].innerText = `Area is ${area}`;
});

areaForms[1].addEventListener("submit", (e) => {
	e.preventDefault();
	errorDiv.style.display = "none";

	const a = Number(inputType2[0].value);
	const b = Number(inputType2[1].value);
	const c = Number(inputType2[2].value);

	if (a + b > c && b + c > a && a + c > b) {
		const s = (a + b + c) / 2;
		result[1].innerText = `Area is ${Math.sqrt(
			s * (s - a) * (s - b) * (s - c)
		).toFixed(3)}`;
	} else {
		errorDiv.style.display = "block";
	}
});

areaForms[2].addEventListener("submit", (e) => {
	e.preventDefault();

	const a = Number(inputType3[0].value);
	const b = Number(inputType3[1].value);
	const angle = Number(inputType3[2].value);

	const area = a * b * Math.sin((angle * Math.PI) / 180);

	result[2].innerText = `Area is ${area.toFixed(3)}`;
});
