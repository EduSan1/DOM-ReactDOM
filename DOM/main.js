"use strict";

function gerarLista() {
    
    let nav = document.createElement("nav");
    nav.setAttribute("class","menu");

    let ul = document.createElement("ul");
    nav.appendChild(ul);

    let li1 = document.createElement("li");
    nav.appendChild(li1);
    let li2 = document.createElement("li");
    nav.appendChild(li2);
    let li3 = document.createElement("li");
    nav.appendChild(li3);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    let a1 = document.createElement("a");
    a1.setAttribute("href", "index.html");
    let txt1 = document.createTextNode("Home");
    a1.appendChild(txt1);
    li1.appendChild(a1);

    let a2 = document.createElement("a");
    a2.setAttribute("href", "livros.html");
    let txt2 = document.createTextNode("Livros");
    a2.appendChild(txt2);
    li2.appendChild(a2);

    let a3 = document.createElement("a");
    a3.setAttribute("href", "autores.html");
    let txt3 = document.createTextNode("Autores");
    a3.appendChild(txt3);
    li3.appendChild(a3);

    let root = document.getElementById("root");
    root.appendChild(nav);
}

document.getElementById("gerarLista").addEventListener("click", gerarLista);