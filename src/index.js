$(function () {
  // Smooth scrolling for links
  $('a[href*=\\#]:not([href=\\#])').click(function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') ||
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    }
  });

  // Contact form submission
  $('#contactForm').submit(function (event) {
    event.preventDefault();
    var name = $('#inputName').val();
    var email = $('#inputEmail').val();
    var message = $('#inputMessage').val();
    var data = {
      name: name,
      email: email,
      message: message,
    };
    $.ajax({
      type: 'POST',
      url: 'contact.php',
      data: data,
      success: function () {
        $('#contactForm').html('<h4>Thank you for your message!</h4>');
      },
    });
  });
});

function initMap() {
  var location = { lat: 39.9526, lng: -75.1652 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: location,
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}
