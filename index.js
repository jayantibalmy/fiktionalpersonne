document.addEventListener('DOMContentLoaded', function () {
  const photo = document.getElementById('photo');
  const strategy = document.getElementById('strategy');
  const copy = document.getElementById('copy');
  const film = document.getElementById('film');

  const elements = [photo, strategy, copy, film];

  // Function to handle mouseover and mouseout events
  function handleMouseEvents() {
    elements.forEach((element, index) => {
      if (window.innerWidth >= 768) { // Check screen width
        element.addEventListener('mouseover', () => handleHover(index));
        element.addEventListener('mouseout', handleMouseOut);
      }
    });
  }

  // Function to handle mouseover event
  function handleHover(index) {
    elements.forEach((element, i) => {
      if (window.innerWidth >= 768) {
        const imgContainer = document.getElementById(`${element.id}-img`);
        const images = imgContainer.getElementsByTagName('img');

        if (i !== index) {
          element.classList.add('text-hover');
        } else {
          element.classList.remove('text-hover');
          imgContainer.classList.add('img-visibility');

          // Add this loop to display images in the hovered container
          for (let j = 0; j < images.length; j++) {
            images[j].style.display = 'block';
          }
        }
      }
    });
  }

  // Function to handle mouseout event
  function handleMouseOut() {
    elements.forEach((element, index) => {
      if (window.innerWidth >= 768) {
        element.classList.remove('text-hover');

        const imgContainer = document.getElementById(`${element.id}-img`);
        const images = imgContainer.getElementsByTagName('img');

        imgContainer.classList.remove('img-visibility');

        // Add this loop to hide all images when not hovered
        for (let j = 0; j < images.length; j++) {
          images[j].style.display = 'none';
        }
      }
    });
  }

  // Call the function to set up event listeners
  handleMouseEvents();

})


document.addEventListener('DOMContentLoaded', function () {
  // Get the current page URL without the file extension
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
  console.log('Current Page:', currentPage);

  // Log all the IDs of the elements with 'link' in their ID
  const allLinkIDs = Array.from(document.querySelectorAll('[id*="link"]')).map(element => element.id);
  console.log('All Link IDs:', allLinkIDs);

  // Identify the active link based on the current page
  const activeLink = document.getElementById(`${currentPage}-link`);
  console.log('Active Link:', activeLink);

  // Add the active class to the identified link
  if (activeLink) {
    // activeLink.style.textDecoration = 'underline';
    activeLink.classList.add('active');

  }
});
