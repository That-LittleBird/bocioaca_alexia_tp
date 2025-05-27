const personne = document.querySelectorAll('.personne');
const modale = document.querySelector('.modale');

for (let i = 0; i < personne.length; i++){
    personne[i].addEventListener('click', openModale);
}

function openModale(){
    const source = this.getElementsByTagName("img");
    const chemin = source[0].getAttribute("src");

    const source1 = this.getElementsByTagName("h3");
    const chemin1 = source1[0].getAttribute("src");

    const source2 = this.getElementsByTagName("p");
    const chemin2 = source2[0].getAttribute("src");

    const image = document.createElement("img");
    const nom = document.createElement("textcontent");
    const titre = document.createElement("textcontent");


    image.setAttribute('src', chemin);

    image.classList.add('zoom');
    modale.appendChild(image);
    modale.classList.add('visible');


    modale.addEventListener("click", closeModale);
}

function closeModale(event) {
    modale.removeChild(event.target);
    modale.classList.remove('visible');
}