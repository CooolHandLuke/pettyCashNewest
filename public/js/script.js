

function createThumbnail(shootId, thumbnailPath, creditsText) {
  const gallery = document.getElementById('gallery');
  const thumbnail = document.createElement('div');
  thumbnail.classList.add('thumbnail');
  thumbnail.innerHTML = `
    <a href="/shoot/${shootId}">
      <img src="${thumbnailPath}" alt="Thumbnail">
    </a>
    <div class="thumbnail-overlay">${creditsText}</div>
  `;
  gallery.appendChild(thumbnail);
}

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".menu").toggleClass("active");
  });
});

$(document).ready(function () {
  $("#about").click(function () {
    $(".aboutPC").toggleClass("active");
  });
});


// Fetch and display shoot thumbnails on the main page
async function loadThumbnails() {
  try {
    const response = await fetch('/shoots');
    const shootDataList = await response.json();

    shootDataList.forEach(shootData => {
      createThumbnail(shootData.id, shootData.thumbnailPath, shootData.firstLineText);
    });
  } catch (error) {
    console.error(error);
  }
}

// Call the function to load thumbnails when the page loads
window.addEventListener('DOMContentLoaded', () => {
  loadThumbnails();

  // Initialize Masonry layout after thumbnails are loaded
  initMasonry();
});

// Function to initialize Masonry
function initMasonry() {
  const gallery = document.getElementById('gallery');
  new Masonry(gallery, {
    itemSelector: '.thumbnail',
    gutter: 10, // Adjust the gutter between items
    percentPosition: true, // Use percentage-based sizing for items
  });
}
