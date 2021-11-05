let currentCat;
let catQuestions;

function loadQuestions() {
	fetch(`questions/${currentCat}.txt`).then(response => response.text()).then((data) => {
		catQuestions = data.split("\n");
		generate();
	});
}

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

	loadQuestions();
}

function generate() {
	if (catQuestions.length < 1) {
		loadQuestions();
	} else {
		let genText = document.getElementById("gen-text");
		let index = Math.floor(Math.random() * catQuestions.length);
		genText.innerText = catQuestions.splice(index, 1);
	}
}