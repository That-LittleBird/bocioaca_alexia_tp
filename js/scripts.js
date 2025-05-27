const personne = document.querySelectorAll(".personne");
const modale = document.querySelector(".modale");
const arriere = document.querySelector(".modaleBoîte")

for (let i = 0; i < personne.length; i++){
    personne[i].addEventListener('click', openModale);
}

function openModale(){
    const parent = this.closest("article");

    const source = this.getElementsByTagName("img");
    const chemin = source[0].getAttribute("src");
    const image = document.createElement("img");
    image.setAttribute('src', chemin);
    image.classList.add('zoom');
    modale.appendChild(image);

    const nomContent = parent.querySelector("h3").textContent;
    const nom = document.createElement("h3");
    nom.textContent = nomContent;
    nom.classList.add("nom");
    modale.appendChild(nom);

    const titreContent = parent.querySelector(".titre").textContent;
    const titre = document.createElement("p");
    titre.textContent = titreContent;
    titre.classList.add("titre");
    modale.appendChild(titre);

    arriere.classList.add('visible');
    modale.addEventListener("click", closeModale);
}

function closeModale(event){
    const nom = document.querySelector(".nom");
    const titre = document.querySelector(".titre")
    const image = document.querySelector(".zoom");

    nom.remove();
    titre.remove();
    image.remove();

    nom.classList.remove("nom");
    titre.classList.remove("titre");
    image.classList.remove("zoom");

    arriere.classList.remove('visible');
}