$(document).ready(function () {
  $('#slider').load('slider.html')
  let folder = 'assets/'
  $.ajax({
    url: folder,
    success: function (data) {
      $(data)
        .find('a')
        .attr('href', function (i, val) {
          if (val.match(/\.(jpg)$/)) {
            if (i % 2 !== 0) {
              $('.slider__up').append(
                "<img class='slider__up__img' src='" + val + "'>"
              )
            } else {
              $('.slider__down__list').append(
                "<img class='slider__down__list__img' src='" + val + "'>"
              )
            }
          }
        })
    }
  })
})
