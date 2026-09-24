
//  Находим все кнопки
const filterButtons = document.querySelectorAll('.filter__btn');

// Находим все блоки стран
const countryBlocks = document.querySelectorAll('.country__block');

// Проходимся по каждой кнопке

filterButtons.forEach(btn => {
    //  // 1. Вешаем обработчик клика на каждую кнопку
    btn.addEventListener('click', () =>{

          // Убираем active у всех кнопок
          filterButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          // 2. Скрыть все блоки
          countryBlocks.forEach(block => block.classList.add('hidden'));

          // 3. Показать нужный
          const country = btn.dataset.country;

          // Находит блок с id, равным значению country, и убирает у него класс hidden.

          document.getElementById(country).classList.remove('hidden');
    });
});