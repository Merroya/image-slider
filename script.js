// Массив изображений для слайдера
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
];

let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const imageNumber = document.getElementById("image-number");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Функция обновления слайдера
function updateSlider() {
    sliderImage.src = images[currentIndex];
    imageNumber.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
}

// Обработчик события для кнопки "Назад"
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

// Обработчик события для кнопки "Вперед"
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

// Первоначальное обновление слайдера при загрузке страницы
updateSlider();
