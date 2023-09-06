$(document).ready(function () {
  // Toggle the menu when the hamburger is clicked
  $(".hamburger").click(function () {
    if ($(".aboutPC").hasClass("active")) {
      $(".aboutPC").removeClass("active");
    } else if ($(".contactPC").hasClass("active")) {
      $(".contactPC").removeClass("active");
    }
    // Toggle the menu
    $(".menu").toggleClass("active");
  });

  // Show aboutPC section when the "ABOUT" link is clicked
  $("#about").click(function () {
    $(".menu").removeClass("active");
    $(".aboutPC").addClass("active");
  });

  $("#contact").click(function () {
    $(".menu").removeClass("active");
    $(".contactPC").addClass("active");
  });
});







// function createThumbnail(shootId, thumbnailPath, creditsText) {
//   const gallery = document.getElementById('gallery');
//   const thumbnail = document.createElement('div');
//   thumbnail.classList.add('thumbnail');
//   thumbnail.innerHTML = `
//     <a href="/shoot/${shootId}">
//       <img src="${thumbnailPath}" alt="Thumbnail">
//     </a>
//     <div class="thumbnail-overlay">${creditsText}</div>
//   `;
//   gallery.appendChild(thumbnail);
// }




// Fetch and display shoot thumbnails on the main page
// async function loadThumbnails() {
//   try {
//     const response = await fetch('/shoots');
//     const shootDataList = await response.json();

//     shootDataList.forEach(shootData => {
//       createThumbnail(shootData.id, shootData.thumbnailPath, shootData.firstLineText);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// Call the function to load thumbnails when the page loads
// window.addEventListener('DOMContentLoaded', () => {
//   loadThumbnails();

//   // Initialize Masonry layout after thumbnails are loaded
//   initMasonry();
// });

// // Function to initialize Masonry
// function initMasonry() {
//   const gallery = document.getElementById('gallery');
//   new Masonry(gallery, {
//     itemSelector: '.thumbnail',
//     gutter: 10, // Adjust the gutter between items
//     percentPosition: true, // Use percentage-based sizing for items
//   });
// }
