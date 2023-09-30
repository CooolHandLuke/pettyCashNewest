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

  $("#background-video").click(function () {
    $(".menu").toggleClass("active");
  });

  $("#background-video-mobile").click(function () {
    $(".menu").toggleClass("active");
  });


  $(".menu").click(function () {
    if ($(".menu").hasClass("active")) {
      $(".menu").removeClass("active");
    }
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

const container = document.querySelector('.container');

function generateMasonryGrid(columns, posts) {

  container.innerHTML = '';

  let columnWrappers = {};

  for (let i = 0; i < columns; i++) {
    columnWrappers[`column${i}`] = [];
  }

  for (let i = 0; i < posts.length; i++) {
    const column = i % columns;
    columnWrappers[`column${column}`].push(posts[i]);
  }

  for (let i = 0; i < columns; i++) {
    let columnPosts = columnWrappers[`column${i}`];
    let div = document.createElement('div');
    div.classList.add('column');

    columnPosts.forEach(post => {
      let postDiv = document.createElement('div');
      postDiv.classList.add('post');
      let image = document.createElement('img');
      image.src = post.image;
      let hoverDiv = document.createElement('div');
      hoverDiv.classList.add('overlay');
      let title = document.createElement('h3');
      title.innerText = post.title;
      hoverDiv.appendChild(title);

      postDiv.addEventListener('click', () => handlePostClick(post.id));
      postDiv.append(image, hoverDiv)

      div.appendChild(postDiv)
    });
    container.appendChild(div);
  }
}

let previousScreenSize = window.innerWidth;

window.addEventListener('resize', () => {
  imageIndex = 0;
  if (window.innerWidth < 600 && previousScreenSize >= 600) {
    generateMasonryGrid(1, posts);
  } else if (window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)) {
    generateMasonryGrid(2, posts);

  } else if (window.innerWidth >= 1000 && previousScreenSize < 1000) {
    generateMasonryGrid(4, posts)
  }
  previousScreenSize = window.innerWidth;

})

if (previousScreenSize < 600) {
  generateMasonryGrid(1, posts)
} else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
  generateMasonryGrid(2, posts)
} else {
  generateMasonryGrid(4, posts)
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
