/*
	Hello! Interested in offering me a position at your company?
	Drop me an email at: jamesrbdev@gmail.com 
*/

//——————————————————————————————————————————————————————————————————//
// INFORMATION                                                      //
//——————————————————————————————————————————————————————————————————//

// Contributors: James Boehme

// This script handles all of the front-end web functionality.

//——————————————————————————————————————————————————————————————————//
// VARIABLES                                                        //
//——————————————————————————————————————————————————————————————————//

let currentCat;
let catQuestions;

//——————————————————————————————————————————————————————————————————//
// FUNCTIONS                                                        //
//——————————————————————————————————————————————————————————————————//

console.log("%cHello! Let me know how I can improve by dropping me an email at: %cjamesrbdev@gmail.com", "font-size: 18px;", "font-size: 18px; color: lightblue; text-decoration: underline;")

// Loads questions array from a text file.
function loadQuestions() { // ()
	fetch(`questions/${currentCat}.txt`).then(response => response.text()).then((data) => {
		catQuestions = data.split("\n");
		generate();
	});
}

// Sets the current question category.
function setCategory(category) { // (string)
	let catOrb = document.getElementById("cat-" + category);
	let catP = catOrb.getElementsByTagName("p")[0];
	let genC = document.getElementById("gen-container")

	genC.hidden = undefined;

	catOrb.style.padding = "1280px";
	catOrb.style.zIndex  = 100;

	document.getElementById("orb-container").style.pointerEvents = "none";
	
	catP.style.opacity = 0;

	setTimeout(() => genC.style.opacity = 1, 0);

	currentCat = category;

	loadQuestions();
}

// Generates a random question from the list.
function generate() { // ()
	if (catQuestions.length < 1) {
		loadQuestions();
	} else {
		let genText = document.getElementById("gen-text");
		let index = Math.floor(Math.random() * catQuestions.length);
		genText.innerText = catQuestions.splice(index, 1);
	}
}

// Shows the about info.
function showAbout() { // ()
	let catOrb = document.getElementById("title-orb");
	let catP = catOrb.getElementsByTagName("h1")[0];
	let genC = document.getElementById("about-container")

	genC.hidden = undefined;

	catOrb.style.padding = "1280px";
	catOrb.style.zIndex  = 100;

	document.getElementById("orb-container").style.pointerEvents = "none";

	catP.style.opacity = 0;

	setTimeout(() => genC.style.opacity = 1, 0);
}