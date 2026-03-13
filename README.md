# Style Guide - TCC
## (TypeScript; JavaScript; HTML; CSS)

---

# JavaScript
```
// Ruim
let d = new Date();

// Bom
let dataAtual = new Date();

const nome = "Carlos";
let idade = 25;

document.querySelector(".btn").addEventListener("click", enviarFormulario);

function formatarPreco(valor){
  return `R$ ${valor.toFixed(2)}`;
}

const lista = document.querySelector("#lista");
lista.innerHTML += "<li>Item</li>";
```
# TypeScript
```
function somar(a: number, b: number): number {
  return a + b;
}
```

# HTML
```
<button class="btn">Enviar</button>

<header></header>
<nav></nav>
<main></main>
<section></section>
<footer></footer>
```

# CSS
```
.btn {
  background: blue;
}

.button {
  padding: 10px;
  border-radius: 5px;
}
```

---

