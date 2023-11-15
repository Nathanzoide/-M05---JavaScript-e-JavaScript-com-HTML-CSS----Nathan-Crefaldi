//1
document.getElementById("botaoClicar").onclick = function() {
    alert("Botão Clicado!!");
};

//2
document.getElementById("campoTexto").onchange = function() {
    this.style.color = "blue";
};

//3
document.getElementById("campoTexto").oninput = function() {
    this.style.color = "green";
};

//4
document.getElementById("campoTexto").onkeydown = function() {
    document.getElementById("mensagemSaida").innerText = "Tecla ativada";
};
document.getElementById("campoTexto").onkeypress = function() {
    document.getElementById("mensagemSaida").innerText = "Digitando";
};
document.getElementById("campoTexto").onkeyup = function() {
    document.getElementById("mensagemSaida").innerText = "Tecla desativada";
};

//5
var elementoCaixa = document.getElementById("caixa");
elementoCaixa.onmouseover = function(){
    this.style.background = "red";
};
elementoCaixa.onmouseout = function() {
    this.style.background = "#00c8a8";
};

//6
elementoCaixa.ondragstart = function(event){
    event.dataTransfer.setData("text/plain", "Arraste-me");
};
elementoCaixa.ondragover = function(event){
    event.preventDefault();
};
elementoCaixa.ondrop = function(event){
    event.preventDefault();
    var dados = event.dataTransfer.getData("text/plain");
    elementoCaixa.innerText = dados;
};

//7
window.onload = function(){
    alert("Página carregada!");
};
