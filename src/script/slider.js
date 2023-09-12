$(document).ready(() => {
  const list = $('.slider__up__list')
  const lowerList = $('.slider__down__cont__list')

  $('#btn_left, #btn_right').on('click', event => {
    const direction = event.target.id
    slide(list, direction)
    slide(lowerList, direction)
  })

  const slide = (list, direction) => {
    const image = list.find(
      direction === 'btn_left' ? 'img:first-child' : 'img:last-child'
    )
    const translateWidth =
      direction === 'btn_left' ? -image.width() - 10 : image.width() + 10

    list.css({
      transform: `translateX(${translateWidth}px)`,
      transition: 'transform 0.6s ease-out'
    })
    setTimeout(function () {
      list.css({
        transition: 'none',
        transform: `translateX(${0}px)`
      })
      if (direction === 'btn_left') {
        image.remove()
        list.append(image.fadeIn('600'))
      } else {
        list.prepend(image)
      }
    }, 600)
  }
})
