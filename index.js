const images = document.querySelectorAll('.image')
const btnLeft = document.getElementById('btn-left')
const btnRight = document.getElementById('btn-right')

let activeImage = 0

btnRight.addEventListener('click', () => {
    activeImage++

    if (activeImage > images.length - 1) {
        activeImage = 0
    }

    onlyOneActive()
})

btnLeft.addEventListener('click', () => {
    activeImage--

    if (activeImage < 0) {
        activeImage = images.length - 1
    }

    onlyOneActive()
})

let changeImageAuto = setInterval(() => {
    activeImage++

    if (activeImage > images.length - 1) {
        activeImage = 0
    }

    onlyOneActive()
}, 5000);

function onlyOneActive() {
    images.forEach( image => image.classList.remove('active') )
    images[activeImage].classList.add('active')
}
