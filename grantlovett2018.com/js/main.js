
document.addEventListener('DOMContentLoaded', function () {

  $("#splashPicture").backstretch("../img/GrantLovettHome.jpg");

  var $animation_elements = $('.animation-element');
  var $window = $(window);
  //checks if the animation should be initialized
  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    $.each($animation_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = element_top_position + element_height;

      //check to see if this current container is within viewport
      if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

  $("#n li").on("click", function (e) {
    e.preventDefault();
    console.log(e);
    var name = "#" + $(this).attr('id') + "rea";
    var pos = $(name).position().top - 40
    if (name === "#contactArea") {
      $('.menu-hide').toggleClass('show');
      $('.menu-tab').toggleClass('active');
    } else {
      $("html").animate({
        scrollTop: pos
      }, 1200);
    }
  });

  $('#x').click(function(){
    $('.menu-hide').removeClass('show');
    $('.menu-tab').removeClass('active');
  });


});
