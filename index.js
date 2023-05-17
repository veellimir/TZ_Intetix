// Смещение от верхнего края
let offset = 0
const slider = document.querySelector('.slide_container_btn')

// Обращаюсь к кнопке
document.querySelector('.slider_next').addEventListener('click', function() {
    // При нажатии увеличиваю значение высоту блока
    offset = offset + 490;
    if (offset > 784) {
      offset = 0  
    }
    slider.style.top = -offset + 'px'
})