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
