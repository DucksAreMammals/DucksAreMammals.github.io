window.addEventListener("load", () => {
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

	// A3 Part 2 & 3
	setupCards();
	setupContactForm();
});

// Sets up the contact form. Should only be called after document is loaded.
function setupContactForm() {
	try {
		// Get elements
		let email = document.getElementById("contactEmail");
		let subject = document.getElementById("contactSubject");
		let message = document.getElementById("contactMessage");
		let submit = document.getElementById("contactSubmit");

		let errorMessage = document.getElementById("contactError");
		let successMessage = document.getElementById("contactSuccess");

		// Implement submitting functionality.
		submit.addEventListener("click", () => {
			try {
				// Clear the error and success messsages.
				errorMessage.innerHTML = "";
				successMessage.style.display = "none";

				// Validate inputs
				if (!email.value) {
					errorMessage.innerHTML = "Please enter an email";
					return;
				}

				if (!subject.value) {
					errorMessage.innerHTML = "Please enter a subject";
					return;
				}

				if (!message.value) {
					errorMessage.innerHTML = "Please enter a message";
					return;
				}

				// Submit contact to server
				// TODO: Implement

				// If there were no errors, display the success message.
				successMessage.style.display = "block";
			} catch (err) {
				console.log("Error submitting message: ", err.message);
			}
		});
	} catch (err) {
		console.log("Error setting up contact form: ", err.message);
	}
}

// Sets up the cards, fetching the data from the server. Should only be called after document is loaded.
async function setupCards() {
	try {
		// Fetch the card content fromt the server.
		let res = await fetch("./projects.json");
		let projects = await res.json();

		// Get the parent element for our cards.
		let cardParent = document.getElementById("projectCards");

		// Display all cards initially.
		displayProjects(projects, cardParent);

		// Get the search bar.
		let cardSearch = document.getElementById("search");

		// Display cards when the search bar is typed in.
		cardSearch.addEventListener("input", () => {
			let filtered = filterProjects(projects, cardSearch.value);
			displayProjects(filtered, cardParent);
		});
	} catch (err) {
		console.log("Error setting up cards: ", err.message);
	}
}

// Filters projects based on a string filter. If the string is empty, returns all projects.
function filterProjects(projects, filter) {
	try {
		let filteredProjects;

		// If the string is empty return all projects.
		if (filter === "") {
			filteredProjects = projects;
		} else {
			// Filter the projects based on the filter.
			filteredProjects = projects.filter((p) => {
				// Case insensitive check.
				return p.title.toLowerCase().includes(filter.toLowerCase());
			});
		}

		return filteredProjects;
	} catch (e) {
		console.log("Error filtering projects: ", e.message);
	}
}

// Shows all projects in list
function displayProjects(projects, parent) {
	try {
		// Clear the existing projects first.
		clearChildren(parent);

		// Debugging.
		console.log("Displaying projects: ", projects);

		// Display all the projects.
		projects.forEach((p) => {
			displayProject(p, parent);
		});
	} catch (e) {
		console.log("Error displaying all projects: ", e.message);
	}
}

// Adds this project to the card display.
function displayProject(project, parent) {
	try {
		// Create the card.
		let card = document.createElement("div");
		card.classList = "projectCard";

		// Add the card to the parent.
		parent.appendChild(card);

		// Create the content element.
		let content = document.createElement("p");

		// Create the content for the content element.
		content.innerHTML =
			`${project.title || "NO TITLE"}<br>` +
			`${project.description || "NO DESCRIPTION"}<br>` +
			`${project.technologiesUsed || "NO TECH USED"}`;

		// Add the content to our card.
		card.appendChild(content);
	} catch (e) {
		console.log("Error displaying single project: ", e.message);
	}
}

// Removes all children from element.
function clearChildren(element) {
	try {
		while (element.lastChild !== null) {
			element.lastChild.remove();
		}
	} catch (e) {
		console.log("Error removing children: ", e.message);
	}
}
