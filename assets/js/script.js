$(document).ready(function () {
  
  $(".search-icon").click(function (e) {
    e.preventDefault();
    $(".search-bar").toggle();
  });

  
  function handleNavbarColor() {
    var $header = $(".header");
    var $navLinks = $(".header .navbar-nav .nav-link");

    if ($(window).scrollTop() > 50) {
      $header.addClass("scrolled");
      $navLinks.css("color", "#000000");
    } else {
      $header.removeClass("scrolled");
      $navLinks.css("color", "#ffffff");
    }
  }

  $(window).scroll(function () {
    handleNavbarColor();
  });

  handleNavbarColor(); 

  
  $("#carouselExampleControls").on("slid.bs.carousel", function () {
    var currentIndex = $("div.carousel-item.active").index();
    $(".carousel-pagination .btn-pagination").removeClass("active");
    $(".carousel-pagination .btn-pagination")
      .eq(currentIndex)
      .addClass("active");
  });

  
  $(".carousel-pagination .btn-pagination").eq(0).addClass("active");

  
  $(".carousel-pagination .btn-pagination").click(function () {
    var slideIndex = $(this).index();
    $("#carouselExampleControls").carousel(slideIndex);
  });
});
ScrollReveal().reveal(".custom-column-left", {
  origin: "left",
  distance: "50px",
  easing: "ease-in-out",
  duration: 800,
  interval: 200,
});

ScrollReveal().reveal(".custom-column-right", {
  origin: "right",
  distance: "50px",
  easing: "ease-in-out",
  duration: 800,
  interval: 200,
});
ScrollReveal().reveal("#popUpContainer", {
  delay: 200,
  distance: "20px",
  origin: "bottom",
  easing: "ease-in-out",
  opacity: 0,
  scale: 0.9,
  beforeReveal: function (el) {
    
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
  },
});
ScrollReveal().reveal('#aboutContainer', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    easing: 'ease-in-out',
    opacity: 0,
    scale: 0.9,
    beforeReveal: function (el) {
        
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
    }
});
$(document).ready(function() {
    
    $('#carouselExampleIndicators').on('slide.bs.carousel', function (event) {
        var slideIndex = event.to;
        
        $('.carousel-slide-numbers span').removeClass('active');
        
        $('.carousel-slide-numbers span').eq(slideIndex).addClass('active');
    });
});