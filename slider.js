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
    let list = $('.slider__up')
    updateList(list, upperImage, 0.5)

    let lowerImage = $('.slider__down__list img:last-child')
    let lowerList = $('.slider__down__list')
    updateList(lowerList, lowerImage, 0.8)

    function updateList (list, image, duration) {
      let leftMargin = parseFloat(list.css('marginLeft')) || 0
      let currentWidth = image.offset().left + image.width()
      let maxWidth = $('.slider__down__arrows-left').offset().left
      let newMargin = 0

      if (maxWidth < currentWidth) {
        newMargin = maxWidth - currentWidth + 10 - leftMargin
      } else {
        newMargin = currentWidth - maxWidth + 10 - leftMargin
      }

      list.css('transition', `margin-left ${duration}s ease-out`)
      list.css('marginLeft', -newMargin + 'px')

      image.fadeTo(500, 0.5, function () {
        image.prependTo(list)
        image.css('opacity', 1)
        list.css('marginLeft', leftMargin)
      })
      setTimeout(function () {
        image.prependTo(list)
        if (newMargin > 120) {
          list.css('marginLeft', leftMargin)
        } else {
          list.css('marginLeft', -newMargin - 20)
        }
        list.css('transition', 'none')
      }, 500)
    }
  })
})
