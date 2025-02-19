// A1 Part 2

// Create a constant variable for my name.
const firstName = "Bjorn";

// Create an object representing a game.
let currentGame = {
	name: "Celeste",
	hours: 225.5,
};

// Log types of variables to console.
console.log(`Type of first name: ${typeof firstName}`);
console.log(`Type of current game: ${typeof currentGame}`);
console.log(`Type of game hours: ${typeof currentGame.hours}`);

// Part 3 and 4 combination
// Calculates the first 10 fibonacci numbers, stores a formatted list in res.
let a = 1;
let b = 1;

// Start the result string with the first two elements.
let res = String(a) + ", " + String(b);

// Loop 8 times, becuase the first two fibonacci numbers are assigned above.
for (let i = 0; i < 8; i++) {
	// Calculate the next fibonacci number by adding a to b and putting the old value of b in a.
	let temp = b;
	b += a;
	a = temp;

	// Add the next fibonacci number that we just calculated the result string.
	res += `, ${b}`;
}

// Print the list of fibonacci numbers.
console.log(res);

// Create a string that describes the relationship between the 10th fibonacci number and 100.
var compString = b < 100 ? "less than" : "greater than or equal to";

// Log wether the 10th fibonacci number is less than 100 to the console.
console.log(`The 10th fibonacci number is ${compString} 100`);

// A2 Part 2

// Define my projects.
let projects = [
	{
		id: 0,
		title: "Portfolio",
		description:
			"This portfolio website. I made this for a college class while pursuing my degree in software development.",
		technologiesUsed: "Javascript, HTML/CSS",
	},
	{
		id: 1,
		title: "Snake",
		description:
			"A simple snake game made in JS using a canvas for display. It was one of the first games I ever made that I was really happy with. I'm still very happy with it, the controls feel good and the game feels fair.",
		technologiesUsed: "Javascript, HTML/CSS, HTML Canvas",
	},
	{
		id: 2,
		title: "Water Collector",
		description:
			"A simple platformer made in Godot. This was the first real project I took on in the Godot game engine, and the first real game I made in any engine. It's rough around the edges and the art could be better, but I'm proud of it.",
		technologiesUsed: "Godot",
	},
];

// Log my projects to the console.
console.table(projects);
