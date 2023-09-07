$(document).ready(function () {
  $('#btn_left').on('click', function () {
    let upperImage = $('.slider__up img:first-child')
    let lowerImage = $('.slider__down__list img:first-child')
    upperImage.slideUp(500, function () {
      $('.slider__up').append(upperImage.fadeIn(400))
    })
    if (lowerImage.offset().left > 0) {
      $('.slider__down__list').css(
        'margin-left',
        '-=' + upperImage.width() + 'px'
      )
    } else {
      lowerImage.slideUp(500, function () {
        $('.slider__down__list').append(lowerImage.fadeIn(400))
      })
    }
  })

  $('#btn_right').on('click', function () {
    let upperImage = $('.slider__up img:last-child')
    let lowerImage = $('.slider__down__list img:last-child')
    upperImage.slideUp(500, function () {
      $('.slider__up').prepend(upperImage.fadeIn(400))
    })
    let imagesWidth =
      lowerImage.offset().left + upperImage.width() + lowerImage.width()
    let maxWidth = $('.slider__down__arrows').offset().left
    if (imagesWidth < maxWidth) {
      $('.slider__down__list').css(
        'margin-left',
        '+=' + upperImage.width() + 'px'
      )
    } else {
      lowerImage.slideUp(500, function () {
        $('.slider__down__list').prepend(lowerImage.fadeIn(400))
      })
    }
  })
})
