document.addEventListener("DOMContentLoaded", ->
  $("#splashPicture").backstretch('../img/GrantLovettHome.jpg')
  console.log "backstretch Loaded"
  $animation_elements = $('.animation-element')
  $window = $(window)

  check_if_in_view ->
    window_height = $window.height()
    window_top_position = $window.scrollTop()
    window_bottom_position = window_top_position + window_height

    $.each $animation_elements, =>
      $element = $(this)
      element_height = $element.outerHeight()
      element_top_position = $element.offset.top
      element_bottom_position = element_top_position +element_height

      if element_bottom_position >= window_top_position && element_top_position <= window_bottom_position
        $element.addClass('in-view')
      else
        $element.removeClass('in-view')
)


$window.on()'scroll resize', check_if_in_view)
  $("#test").click ->
    console.log "clicked"
    )
