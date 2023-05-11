// Exercício 1
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
});

// Exercício 2
const form1 = document.getElementById("form1");
const lista = document.getElementById("lista");
form1.addEventListener("submit", function(event){
    event.preventDefault();
    const texto = document.getElementById("texto").value;
    const novoItem = document.createElement("li");
    novoItem.textContent = texto;
    lista.appendChild(novoItem);
    form1.reset();
});

// Exercício 3
const btn2 = document.getElementById("btn2");
const imagem = document.getElementById("imagem");
btn2.addEventListener("click", function(){
    const imagem1 = imagem.getAttribute("src");
    const img2 = imagem1 === "imagem1.jpg" ? "imagem2.jpg" : "imagem1.jpg";
    imagem.setAttribute("src", img2);
});

// Exercício 4
const btn3 = document.getElementById("btn3");
const msg = document.getElementById("msg");
btn3.addEventListener("click", function(){
    msg.textContent = "me achou.";
});

// Exercício 5
const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", function(){
    btn4.style.display = "none";
});

const btn5 = document.getElementById("btn5");
btn5.addEventListener("click", function(){
    btn4.style.display = "";
});