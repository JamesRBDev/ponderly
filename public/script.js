let currentCat;
let catQuestions;

function setCategory(category) {
	let catOrb = document.getElementById("cat-" + category);
	let catP = catOrb.getElementsByTagName("p")[0];
	let genC = document.getElementById("gen-container")
	genC.hidden = undefined;
	catOrb.style.padding = "1280px";
	catOrb.style.zIndex = 100;
	document.getElementById("orb-container").style.pointerEvents = "none";
	catP.style.opacity = 0;
	genC.style.opacity = 1;
	currentCat = category;

	fetch(`questions/${currentCat}.txt`).then(response => response.text()).then((data) => {
		catQuestions = data.split("\n");
		generate();
	});
}

function generate() {
	let genText = document.getElementById("gen-text");
	genText.innerText = catQuestions[Math.floor(Math.random() * catQuestions.length)];
}