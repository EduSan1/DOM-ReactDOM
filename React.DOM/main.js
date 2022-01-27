// "use strict";

// function gerarLista() {

//     const nav = React.creatElement("nav" ,{className: "nav"},"");
//     ReactDOM.render(nav, document.getElementById("root"));

//     const ul = React.creatElement("ul" ,{className: "ul"},"");
//     ReactDOM.render(ul, document.getElementById("nav"));

//     const li = React.creatElement("li" ,{className: "li"},"");
//     ReactDOM.render(li, document.getElementById("ul"));

//     const a = React.creatElement("a" ,{href: "index.html"},"Home");
//     ReactDOM.render(a, document.getElementById("li"));

// }

// document.getElementById("gerarLista").addEventListener("click", gerarLista);
function gerarLista() {
  function App() {
    return React.createElement(
      "nav",
      { className: "nav" },
      React.createElement(
        "ul",
        {},
        React.createElement(
          "li",
          {},
          React.createElement("a", { href: "index.html" }, "Home")
        ),
        React.createElement(
          "li",
          {},
          React.createElement("a", { href: "livros.html" }, "Livro")
        ),
        React.createElement(
          "li",
          {},
          React.createElement("a", { href: "autores.html" }, "Autores")
        )
      )
    );
  }

  ReactDOM.render(App(), document.getElementById("root"));
}
document.getElementById("gerarLista").addEventListener("click", gerarLista);
