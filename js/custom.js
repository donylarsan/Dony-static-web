function addDelay() {
    var container = document.getElementById("courses");
    var win_height = window.innerHeight;
    var cont_height = container.clientHeight;
    var scroll_pos = window.scrollY || window.pageYOffset;

    if (scroll_pos + win_height >= cont_height) {
      setTimeout(function() {
        var newElem = document.createElement('div');
        newElem.className = "box";
        container.appendChild(newElem);
      }, 200); // Delay of 200 milliseconds
    }
  }

  window.addEventListener("scroll", function() {
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(addDelay, 200);
  });


  // When the Django heading is clicked
  $("#django-heading").click(function() {
    // Show the hidden window
    $("#django-details").fadeIn();
  });



  $(".pro_card").mouseenter(function() {
    $(this).stop().animate({
      width: '351px',
      height: '351px',
      padding: '1px'
    }, 300); // Adjust the duration (in milliseconds) as needed
  });

  $(".pro_card").mouseleave(function() {
    $(this).stop().animate({
      width: '22rem',
      height: '22rem',
      padding: '0em'
    }, 600); // Adjust the duration (in milliseconds) as needed
  });
  

  $(".edu_card").mouseenter(function() {
    $(this).stop().animate({
      
      padding: '5px'
    }, 300); // Adjust the duration (in milliseconds) as needed
  });

  $(".edu_card").mouseleave(function() {
    $(this).stop().animate({
      
      padding: '0px'
    }, 3000); // Adjust the duration (in milliseconds) as needed
  });
