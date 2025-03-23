let swiper;

function initSwiper(){
swiper = new Swiper('.swiper', {
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
}

 // Функция для уничтожения Swiper
 function destroySwiper() {
  if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
  }
}

// Проверка ширины экрана и инициализация/уничтожение Swiper
function handleResize() {
  if (window.innerWidth <= 768) {
      if (!swiper) {
          initSwiper();
      }
  } else {
      destroySwiper();
  }
};

// Начальная проверка при загрузке страницы
handleResize();

// Добавляем обработчик события на изменение размера окна
window.addEventListener('resize', handleResize);


let menu = document.querySelector('.swiper');/* Этот метод позволяет получить элемент из DOM по указанному селектору.Сохраняет элемент с классом .menu и ниже*/
let readmore = document.querySelector('.read-more');
let readmoreArrow = readmore.querySelector('.read-more__arrow');
let readmoreText = readmore.querySelector('.read-more__text');

readmore.addEventListener('click', function() { 
  // Используем toggle для управления классами и текстом
  let isOpen = menu.classList.toggle('openMenu'); // Добавляем / удаляем класс openMenu

  readmoreText.textContent = isOpen ? 'Скрыть' : 'Показать все'; // Меняем текст в зависимости от состояния и используем тернарный оператор
  readmoreArrow.style.transform = isOpen ? 'rotate(-180deg)' : 'rotate(0deg)'; // Поворачиваем стрелку в зависимости от состояния
});





