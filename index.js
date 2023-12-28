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

// film page -----------------------------------------------------------
function replaceFilmContent(filmId) {
  var filmContentToggle = document.getElementById('film-content-toggle');
  var filmContent = document.getElementById('film-content');

  // Hide film-content-toggle
  filmContentToggle.style.display = 'none';

  // Set inner HTML of film-content based on the clicked film-content-toggleX
  switch (filmId) {
    case 'film-content-toggle1':
      filmContent.innerHTML = `
      <div class="toggle-content">
      <div class="film-title">
        <h3><a href="./film.html" id="film-link">Film/</a></h3>
        <h1> The Tree and the Cat </h1>
      </div>
      <div> 
          <p>In 1983, a short animated film titled "The Tree and the Cat" was released. The tale revolves
              around a solitary tree that leads a contented life and decides to impart its wisdom to a cat.
              Despite the cat being initially rejected by a wagon, it eventually learns important life lessons
              from the wise tree.</p>
      </div>
      <div class="film-cred-vid">
          <div>
              <h3>Credits</h3>
              <p>Directed by Yevgeny Sivokon</p>
              <p>Written by Irina Margolina</p>
              <p>Art director Valentina Sertsova</p>
              <p>Animators Nina Churilova, Igor Kovaliev, N. Zurabova</p>
              <p>Cameraman Alexander Mukhin</p>
              <p>Executive producer Ivan Mazepa</p>
              <p>Music Vadim Khrapachev</p>
              <p>Sound Igor Pogon</p>
              <p>Script editor Svetlana Kutsenko</p>
          </div>
          <iframe class="yt-vid" width="560" height="315" src="https://www.youtube.com/embed/AEED7YccGc4?si=NEEvmZ8N33124sgM"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
      </div>
  </div>
          `;
      break;
    case 'film-content-toggle2':
      filmContent.innerHTML = `
      <div "toggle-content">
      <div class="film-title">
      <h3><a href="./film.html" id="film-link">Film/</a></h3>
      <h1>WoW, a talking fish! </h1>
    </div>
      <div>
          <p>Original title: Ух ты, говорящая рыба! (Ukh ty, govoryashchaya ryba!)</p>
          <p>Soviet animated short film called "Wow, a Talking Fish!" (Ух ты, говорящая рыба!) that tells the
              story of a talking fish. The film was directed by Robert Sahakyants and released in 1983.

              The story follows a poor fisherman who catches a talking fish. The fish tells the fisherman to
              release him back into the sea, and in return, he will grant the fisherman three wishes. The
              fisherman, initially skeptical, agrees. However, he soon regrets his decision as the fish's
              magic turns his life upside down.</p>

      </div>
      <div class="film-cred-vid">
          <div>
              <h3>Credits</h3>
              <p>Director Priit Parn</p>
              <p>Assistant Director Svetlana Saks</p>
              <p>Producer Kulno Luht</p>
              <p>Writer Priit Parn</p>
              <p>Editor Aino Lootus</p>
              <p>Cinematography Arvil Ilves</p>
              <p>Music by Robert Amirkhanyan</p>
              <p>Sound Toivo Elme</p>
          </div>
          <iframe class="yt-vid" width="560" height="315" src="https://www.youtube.com/embed/fgxHIWBt5yg?si=Us6V_2CcEksBHsvp"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
      </div>
  </div>
              
          `;
      break;
    case 'film-content-toggle3':
      filmContent.innerHTML = `
      <div "toggle-content">       
        <div class="film-title">
        <h3><a href="./film.html" id="film-link">Film/</a></h3>
        <h1>Priit Parn Ja teeb trikke </h1>
      </div>
        <div>
            <p>A tiny green bear (the Trickster) tries his best to impress a group of animals with his annoying tricks.</p>

        </div>
        <div class="film-cred-vid">
            <div>
                <h3>Credits</h3>
                <p>Directed by Robert Sahakyants</p>
                <p>Written by Hovhannes Tumanyan & Robert Sahakyants</p>
                <p>Art director Robert Sahakyants</p>
                <p>Animator Robert Sahakyants</p>
                <p>Cinematography by Alice Kyurdian</p>
                <p>Executive producer Ivan Mazepa</p>
                <p>Music by Robert Amirkhanyan</p>
                <p>Script editor Hrachya Beyleryan</p>
            </div>
            <iframe class="yt-vid" width="560" height="315" src="https://www.youtube.com/embed/snYN57eKTz4?si=DPQyvBdWC_-PPo26" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
    </div>
          `;
      break;
    default:
      break;
  }
}

// Add click event listeners to film content toggle divs
document.getElementById('film-content-toggle1').addEventListener('click', function () {
  replaceFilmContent('film-content-toggle1');
});
document.getElementById('film-content-toggle2').addEventListener('click', function () {
  replaceFilmContent('film-content-toggle2');
});
document.getElementById('film-content-toggle3').addEventListener('click', function () {
  replaceFilmContent('film-content-toggle3');
});