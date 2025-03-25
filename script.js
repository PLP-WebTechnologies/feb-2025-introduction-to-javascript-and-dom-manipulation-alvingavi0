// Change text content dynamically
function changeText() {
    document.getElementById("text").innerText = "Text changed dynamically!";
}

// Modify CSS styles using JavaScript
function changeColor() {
    document.getElementById("styleText").style.color = "red";
}

// Add a new element dynamically
function addElement() {
    let newElement = document.createElement("p");
    newElement.innerText = "New dynamic element added!";
    document.getElementById("container").appendChild(newElement);
}

// Remove the last added element
function removeElement() {
    let container = document.getElementById("container");
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}
