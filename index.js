

const swiper = new Swiper('.swiper', {
  // Optional parameters
    loop: true,
    slidesPerView: "1.3", // количество слайдов которые будут отображаться
    spaceBetween: 16, // растояние между слайдами
    breakpoints: { // адаптация под разные экраны
      500:{slidesPerView: 2}, // если привысит 500px, то будет отображаться 2 слайда
    },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    //Буллеты
    clickable: true, // включение навигации по нажатию на булиты
  },
});


let menu = document.querySelector('.menu');/* Этот метод позволяет получить элемент из DOM по указанному селектору.Сохраняет элемент с классом .menu и ниже*/
let readmore = document.querySelector('.read-more');
let readmoreArrow = readmore.querySelector('.read-more__arrow');
let readmoreText = readmore.querySelector('.read-more__text');

readmore.addEventListener('click', function(){ /*  Добавляет обработчик события на элемент readmore, который будет выполнен при клике на этот элемент..*/
    if(readmoreText.textContent === 'Показать все'){ /* Проверяет текст внутри элемента readmoreText. Если он равен "Показать все", выполняется следующий блок кода..*/
        menu.classList.add('openMenu') /* Добавляет класс openMenu к элементу menu, что, скорее всего, изменяет его стили (например, делает его видимым).*/
        readmoreText.textContent = 'Скрыть' /* Изменяет текст на кнопке на "Скрыть".*/
        readmoreArrow.style.transform = 'rotate(-180deg)' /* Поворачивает стрелку на -180 градусов, чтобы визуально показать, что меню открыто*/

    }else{
        menu.classList.remove('openMenu') /* скрывает его. */
        readmoreText.textContent = 'Показать все' /* Возвращает текст на кнопке обратно на "Показать все".*/
        readmoreArrow.style.transform = 'rotate(0deg)' /* Возвращает стрелку в исходное положение (0 градусов), показывая, что меню закрыто.*/
    }
    
});







