const personne = document.querySelectorAll('.personne');
const modale = document.querySelector('.modale');

for (let i = 0; i < personne.length; i++){
    personne[i].addEventListener('click', openModale);
}

function openModale(){
    const chemin = this.getAttribute("src");
    const image = document.createElement('img');
    image.setAttribute('src', chemin);
    image.classList.add('zoom');
    modale.appendChild(image);
    modale.classList.add('visible');
    image.addEventListener("click", closeModale);
    console.log("hello");
}

function closeModale(event) {
    modale.removeChild(event.target);
    modale.classList.remove('visible');
}