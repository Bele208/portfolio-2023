document.querySelectorAll(".certificados img").forEach(imagen =>{
    imagen.onclick = () =>{
    document.querySelector(".imagen-popup").style.display = "block";
    document.querySelector(".imagen-popup img").src = imagen.getAttribute("src");          
    }
});

document.querySelector(".imagen-popup span").onclick = () =>{
    document.querySelector(".imagen-popup").style.display = "none"
};
