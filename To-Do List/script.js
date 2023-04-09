// Get references to the button, input field, and unordered list
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// Returns the length of the value entered in the input field
function inputLength() {
	return input.value.length;
}

// Creates a new list item with a delete button and appends it to the unordered list
function createListElement() {
	
	// create a new list item and delete button
	var li = document.createElement("li");
	var delButton = document.createElement("button");

    // add text to the list item and delete button
	li.appendChild(document.createTextNode(input.value));
	delButton.appendChild(document.createTextNode("Delete"));

	// add the "delete" class to the delete button
	delButton.classList.add("delete");

	// add the list item and delete button to the unordered list
	li.appendChild(delButton);
	ul.appendChild(li);

	// reset the input field
	input.value = "";
}

// Adds a new list item when the button is clicked
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// Adds a new list item when the "enter" key is pressed
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Toggles the "done" class on and off when a list item is clicked
function toggleDone(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}

// Deletes a list item when its corresponding delete button is clicked
function deleteListItem(event) {
	if (event.target.classList.contains("delete")) {
		event.target.parentNode.remove();
	}
}

// Event listeners for the button, input field, and unordered list
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleDone);
ul.addEventListener("click", deleteListItem);
