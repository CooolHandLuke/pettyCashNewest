$(document).ready(function () {

  // Toggle the menu when the hamburger is clicked
  $(".hamburger").click(function () {
    // If the aboutPC is active, remove it and show the logo
    if ($(".aboutPC").hasClass("active")) {
      $(".aboutPC").removeClass("active");
      $(".top-nav .logo").show();
    } else if ($(".contactPC").hasClass("active")) {
      $(".contactPC").removeClass("active");
    }
    // Toggle the menu
    $(".menu").toggleClass("active");
  });


  document.getElementById('background-video').onended = function () {
    console.log("video")

    this.play();
  };

  $(".logo").click(function () {
    // If the aboutPC is active, remove it and show the logo
    if ($(".aboutPC").hasClass("active") || $(".menu").hasClass("active")) {
      $(".menu").removeClass("active")
      $(".aboutPC").removeClass("active");
      $(".top-nav .logo").show();
    } else if ($(".contactPC").hasClass("active")) {
      $(".contactPC").removeClass("active");
    }
    // Toggle the menu
  });

  $(".about-logo").click(function () {
    // If the aboutPC is active, remove it and show the logo
    if ($(".aboutPC").hasClass("active")) {
      $(".aboutPC").removeClass("active");
      $(".top-nav .logo").show();
    } else if ($(".contactPC").hasClass("active")) {
      $(".contactPC").removeClass("active");
    }
    // Toggle the menu
  });

  // Show aboutPC section when the "ABOUT" link is clicked
  $("#about").click(function () {
    $(".menu").removeClass("active");
    $(".aboutPC").addClass("active");
    // If about is clicked, hide the logo
    $(".top-nav .logo").hide();
  });

  $("#contact").click(function () {
    $(".menu").removeClass("active");
    $(".contactPC").addClass("active");
    // If any other menu item is clicked, show the logo
    $(".top-nav .logo").show();
  });
});

function setVhHeight() {
  const viewportHeight = window.innerHeight;

  // Get all elements with the class "vh-element"
  const vhElements = document.querySelectorAll(".vh-element");

  vhElements.forEach(element => {
    // Get the desired vh value from the data attribute
    const vhValue = parseFloat(element.getAttribute('data-vh'));

    // Convert the vh value to pixels
    const pixelValue = (vhValue / 100) * viewportHeight;

    // Set the height of the element
    element.style.height = `${pixelValue}px`;
  });
}




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
