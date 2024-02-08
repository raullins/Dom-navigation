// Navegação DOM = Processo de navegação/manuseio da estrutura HTML utilizando JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


// -----.firstElementChild-----

/*
const element = document.getElementById("carnes");
const primeiroElemento = element.firstElementChild;
primeiroElemento.style.backgroundColor = "red"

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {

    // SEM GUARDAR EM VARIAVEL
    //ulElement.firstElementChild.style.backgroundColor = "red";

    //GUARDANDO EM VARIAVEL
    const primeiroElemento = ulElement.firstElementChild;
    primeiroElemento.style.backgroundColor = "red";
})
*/

// -----.lastElementChild-----

/*
const element = document.getElementById("carnes");
const ultimoElemento = element.lastElementChild;
ultimoElemento.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {

    // SEM GUARDAR EM VARIAVEL
    //ulElement.firstElementChild.style.backgroundColor = "yellow";

    //GUARDANDO EM VARIAVEL
    const ultimoElemento = ulElement.lastElementChild;
    ultimoElemento.style.backgroundColor = "yellow";
})
*/


// -----.nextElementSibling-----

/*
const element = document.getElementById("vegetais");
const proxElemento = element.nextElementSibling;
proxElemento.style.backgroundColor = "green";
*/


// -----.previousElementSibling-----

/*
const element = document.getElementById("cenoura");
const anteriorElemento = element.previousElementSibling;
anteriorElemento.style.backgroundColor = "purple";
*/


// -----.parentElement-----

/*
const element = document.getElementById("peixe");
const paiElemento = element.parentElement;
paiElemento.style.backgroundColor = "brown";
*/


// -----.children-----

const element = document.getElementById("carnes");
const filhos = element.children;

filhos[1].style.fontWeight = "bold";

Array.from(filhos).forEach(filho => {
    filho.style.color = "white";
    filho.style.backgroundColor = "blue";
});