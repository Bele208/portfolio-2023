//-----------Menú responsive---------//
let menuIcon = document.getElementById('menu-icon');
let menu = document.getElementById('menu-resp');
let links = menu.getElementsByTagName('a'); // Obtén todos los enlaces del menú

// Añade un evento de click al ícono de menú
menuIcon.addEventListener('click', function() {
  // Cambia el icono de ☰ a una X y muestra/oculta el menú
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
    menuIcon.innerHTML = '☰';
  } else {
    menu.style.display = 'flex';
    menuIcon.innerHTML = '✕';
  }
});

// Añade un evento de click a cada enlace del menú
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {
    if (window.innerWidth <=767){
    menu.style.display = 'none';
    menuIcon.innerHTML = '☰';
    }
  });
}
// Añade un evento de redimensionamiento de ventana
window.addEventListener('resize', function() {
// Muestra el menú automáticamente en pantallas grandes después de hacer clic en un enlace
    if (window.innerWidth > 767 && menu.style.display === 'none') {
      menu.style.display = 'flex';
      menuIcon.innerHTML = '✕';
    }
  });

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      // Cierra el menú solo en pantallas pequeñas
      if (window.innerWidth <= 767) {
        setTimeout(function() { // Agrega un retraso de tiempo para asegurarse de que la redirección se haya completado
          menu.style.display = 'none';
          menuIcon.innerHTML = '☰';
        }, 300); // Cambia este valor si es necesario para ajustar el tiempo de retraso
      }
    });
  }

//-----------Certificados---------//
document.querySelectorAll(".certificados img").forEach(imagen =>{
    imagen.onclick = () =>{
    document.querySelector(".imagen-popup").style.display = "block";
    document.querySelector(".imagen-popup img").src = imagen.getAttribute("src");          
    }
});

document.querySelector(".imagen-popup span").onclick = () =>{
    document.querySelector(".imagen-popup").style.display = "none"
};