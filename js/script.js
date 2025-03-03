// Variáveis de controle do carrossel
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Função para mostrar o slide atual
function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    });

    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlideIndex) {
            dot.classList.add('active');
        }
    });
}

// Função para próximo slide
function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

// Função para slide anterior
function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

// Função para slide específico (clicando nos dots)
function currentSlide(index) {
    showSlide(index);
}

// Eventos de navegação
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// Eventos nos dots
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => currentSlide(i));
});

// Inicializa o carrossel
showSlide(currentSlideIndex);

// Navegação automática a cada 5 segundos
setInterval(nextSlide, 5000);
document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.getElementById("contact-link");

    if (contactLink) {
        contactLink.addEventListener("click", function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            window.location.href = "contact.html"; // Redireciona para a página de contato
        });
    }
});

