const photo = document.getElementById('photo');
const strategy = document.getElementById('strategy');
const copy = document.getElementById('copy');
const film = document.getElementById('film');

const elements = [photo, strategy, copy, film];

// Function to handle mouseover and mouseout events
function handleMouseEvents() {
  elements.forEach(element => {
    element.addEventListener('mouseover', handleHover);
    element.addEventListener('mouseout', handleMouseOut);
  });
}

// Function to handle mouseover event
function handleHover(event) {
  const hoveredElement = event.target;

  elements.forEach(element => {
    if (element !== hoveredElement) {
      element.classList.add('text-hover');
    }
  });
}

// Function to handle mouseout event
function handleMouseOut() {
  elements.forEach(element => {
    element.classList.remove('text-hover');
  });
}

// Call the function to set up event listeners
handleMouseEvents();
