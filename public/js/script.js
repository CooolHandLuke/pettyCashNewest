function updateLogo() {
  if (window.innerWidth < 1000) {
    if ($(".aboutPC").hasClass("active") || $(".contactPC").hasClass("active")) {
      // If about or contact is active and width is less than 1000px
      $(".logo img").attr("src", "pettycash_websitetransparent2_white.png");
      $(".logo").css("top", "15%"); // Adjust as needed for the active state in narrow screens
    } else {
      // If neither about nor contact is active and width is less than 1000px
      $(".logo img").attr("src", "pettycash_websitetransparent2.png");
      $(".logo").css("top", "50%"); // Adjust as needed for the inactive state in narrow screens
    }
  } else {
    // For screens wider than 1000px (you can keep your existing logic or adjust as needed)
    if ($(".aboutPC").hasClass("active") || $(".contactPC").hasClass("active")) {
      $(".logo img").attr("src", "pettycash_websitetransparent2_white.png");
      $(".logo").css("top", "5%");
    } else {
      $(".logo img").attr("src", "pettycash_websitetransparent2.png");
      $(".logo").css("top", "45%");
    }
  }
}

$(document).ready(function () {


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
      $("#top-nav").attr("background-color", "#ea7499ff")
    } else if ($(".contactPC").hasClass("active")) {
      $(".contactPC").removeClass("active");
    }
    // Toggle the menu
  });

  $(".logo").click(function () {
    $(".aboutPC").removeClass("active");
    $(".contactPC").removeClass("active");
    updateLogo(); // Update the logo
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
    updateLogo(); // Update the logo

  });

  $("#contact").click(function () {
    if ($(".aboutPC").hasClass("active")) {
      $(".aboutPC").removeClass("active"); // Deactivate aboutPC if it's active
    }
    $(".menu").removeClass("active");
    $(".contactPC").addClass("active");
    $(".top-nav .logo").show();
    updateLogo(); // Update the logo

  });
  $(window).resize(function () {
    updateLogo();
  });

  // Call when about or contact sections are toggled


  updateLogo();
});
$(window).resize(function () {
  updateLogo(); // Call on window resize
});


$("#about").click(function () {
  if ($(".contactPC").hasClass("active")) {
    $(".contactPC").removeClass("active"); // Deactivate contactPC if it's active
  }
  $(".menu").removeClass("active");
  $(".aboutPC").toggleClass("active"); // Toggle aboutPC
  $(".top-nav .logo").hide();
  updateLogo(); // Update the logo
});

// Show contactPC section when the "CONTACT" link is clicked
$("#contact").click(function () {
  if ($(".aboutPC").hasClass("active")) {
    $(".aboutPC").removeClass("active"); // Deactivate aboutPC if it's active
  }
  $(".menu").removeClass("active");
  $(".contactPC").toggleClass("active"); // Toggle contactPC
  $(".top-nav .logo").show();
  updateLogo(); // Update the logo
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

