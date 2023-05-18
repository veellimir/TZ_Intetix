// Смещение от верхнего края
let offset = 0
const slider = document.querySelector('.slide_container_btn')

// Обращаюсь к кнопке
document.querySelector('.slider_next').addEventListener('click', function () {
    // При нажатии увеличиваю значение высоту блока
    offset = offset + 490;
    if (offset > 784) {
        offset = 0
    }
    slider.style.top = -offset + 'px'
})
// Аудио файлы
// let start = false
// const engine = new Audio('../../sound/aud.ogg')
// engine.loop = true
// engine.volume = 0.3

// document.querySelector('.start').addEventListener('click', function () {
//     if (start === false) {
//         start = true
//         this.innerHTML = 'stop'
//         engine.play()
//     }
// })
function soundOne() {
    var audio = new Audio();
    audio.src = '../../sound/aud.mp3'; 
    audio.autoplay = true; 
}
function soundTwo () {
    var audio = new Audio();
    audio.src = '../../sound/aud2.mp3'; 
    audio.autoplay = true; 
}