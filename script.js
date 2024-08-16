
var swiper = new Swiper(".mySwiper-1",{
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints : {
        0: {
            slidesPerView:1,
        },

        520: {
            slidesPerView:2,
        },

        950: {
            slidesPerView:3,
        }
    }
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {
    
    input.addEventListener('change', function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper'+ id);
        thisSwiper.swiper.update();
    })
});

// Codigo scroll para javascript

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los enlaces con la clase "smooth-scroll"
    var scrollLinks = document.querySelectorAll('.smooth-scroll');

    // Agrega un evento de clic a cada enlace
    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener('click', function(event) {
            // Previene el comportamiento predeterminado del enlace
            event.preventDefault();
            
            // Obtiene el atributo href del enlace
            var targetId = this.getAttribute('href');
            
            // Obtiene la posición de la sección de destino
            var targetPosition = document.querySelector(targetId).offsetTop;
            
            // Desplaza suavemente la página hacia la sección de destino
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var moreText = document.getElementById("moreText");
    var btn = document.getElementById("toggleBtn");

    btn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "block";
            btn.innerHTML = "Mostrar menos";
        } else {
            moreText.style.display = "none";
            btn.innerHTML = "Más Información";
        }
    });
});
