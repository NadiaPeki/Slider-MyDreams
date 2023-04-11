function slidesPlugin(activeSlide = 0) {
    const slides = document.querySelectorAll('.slide') //с помощью qsAll выбираем все слайды и присваиваем этот массив переменной 

    slides[activeSlide].classList.add('active')       //slides это массив и таким образом мы обращаемся к конкр элементу массива
    
    for (const slide of slides) {  // обходим массив с помощью цикла for. На каждой иттерации создаем константу для одного из элементов массива(по очереди) и исп of говорим откуда мы хотим брать эти элементы
        slide.addEventListener('click', () => {     //нам надо при клике убрать с других слайдов класс active, обращаемся к переменной slide
            clearActiveClasses()       // ниже создаем функцию, кот убирает класс active с тех слайдов кот мы хотим скрыть
            slide.classList.add('active') //т е при клике на опред слайд к нему добавляется класс active
        })
    }
    
    function clearActiveClasses() { //используем метод forEach для работы с массивом, можно было и делать с циклом for тоже как выше
        slides.forEach((slide) => { // на каждой иттерации получаем определенный слайд
        slide.classList.remove('active')  // используя remove мы указыв какой класс мы хотим удалить
        })
    }
}
slidesPlugin()
