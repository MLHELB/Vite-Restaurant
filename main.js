import "/style.css";
import "/normalize.css";





let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

// let search = document.querySelector("#search-icon");
// let form = document.querySelector("#search-form")
let close = document.querySelector("#close")



let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a')

let loader = document.querySelector(".loader-container")


menu.addEventListener("click",()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
})
// ----------------------------

window.addEventListener("scroll",()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');


    section.forEach(sec => {
      let top = window.scrollY;
      // Esta línea almacena la posición actual del desplazamiento vertical de la ventana en la variable top. Es decir, guarda la cantidad de píxeles que la ventana se ha desplazado verticalmente desde la parte superior.
      let height = sec.offsetHeight;
      // Aquí se almacena la altura del elemento actual (sec) en la variable height. offsetHeight devuelve la altura del elemento, incluyendo el relleno y el borde, pero no incluye las barras de desplazamiento.
      let offset = sec.offsetTop -100 ;
      // Esta línea calcula la posición superior del elemento actual (sec) en relación con su elemento padre descontando 100 píxeles. Esto se utiliza para determinar a qué altura de desplazamiento la sección debe considerarse como visible en la pantalla.
      let id = sec.getAttribute('id');
      // Aquí se obtiene el valor del atributo id del elemento actual (sec) y se almacena en la variable id. Esto se utiliza para construir un selector para buscar el enlace de navegación correspondiente.
      // Offset
      // -100                                             
      // main.js:35 574
      // main.js:35 1633
      // main.js:35 2304
      // main.js:35 4628

      // Height
      //       674
      // main.js:35 1059
      // main.js:35 671
      // main.js:35 2324
      // main.js:35 457


      if (top >= offset && top < offset + height) {//La suma de offset + height representa la posición vertical en la que la parte inferior de la sección se encuentra fuera  de la pantalla, es decir, donde la sección ya no es visible completamente... asegura que el desplazamiento vertical no ha superado el punto donde la sección deja de ser completamente visible en la pantalla
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        document.querySelector('header .navbar a[href*="' + id + '"]').classList.add('active');
        // Utiliza el método querySelector del objeto document para buscar un elemento en el documento HTML que cumpla con el selector CSS especificado. En este caso, el selector busca un elemento <a> dentro de un elemento con clase 'navbar', que a su vez está dentro de un elemento <header>, y cuyo atributo href contiene el valor del atributo id de la sección actual (id).
      }
    });
})

// ---------------------

// search.addEventListener("click",()=>{
//   form.classList.toggle("active")
// })

// close.addEventListener("click",()=>{
//   form.classList.remove("active")
// })

let swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});


let swiperDos = new Swiper(".review-slide", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    640:{
      slidesPerView:2,
    },
    768:{
      slidesPerView:2,
    },
    1024:{
      slidesPerView:3,
    },
  }
});



  // --------------------------------

  function loaderS(){
     loader.classList.add("fade-out")
  }

  function fadeOut(){
    setInterval(loaderS,3000)
  }

  window.onload = fadeOut;
  // El evento onload, cuya abreviatura es load se dispara al final del proceso de carga del documento. Es decir, cuando todos los objetos del DOM (imágenes, flash, scripts, frames) han terminado de cargarse. Una excepción son las hojas de estilo, que no siempre están cargadas al momento de lanzarse este evento.
