// Aqui serão adicionados seus scripts


// Obter o elemento da notícia principal
const noticiaPrincipalNovoNome = document.getElementById("noticia-principal");
alert(noticiaPrincipalNovoNome.innerHTML);

///1///

const titulosNoticiaNovoNome = document.getElementsByTagName("h1");
for(const tituloNovoNome of titulosNoticiaNovoNome){
    tituloNovoNome.style.fontWeight = "bold";
    tituloNovoNome.style.color = "green";
}

///2///

const paragrafosNoticiaNovoNome = document.getElementsByClassName("paragrafo-noticia");
for(const paragrafoNovoNome of paragrafosNoticiaNovoNome){
    paragrafoNovoNome.innerHTML = "Leia a notícia completa";
}

///3///

const secaoComentarioNovoNome = document.getElementById("secao-comentarios");
const novoComentarioNovoNome = document.createElement("p");
novoComentarioNovoNome.innerHTML = "Deixe o seu comentário";
secaoComentarioNovoNome.appendChild(novoComentarioNovoNome);

///4///

const ultimasAtualizacoesNovoNome = document.getElementById("ultimas-atualizacoes");
const ultimoItemNovoNome = ultimasAtualizacoesNovoNome.lastElementChild;
ultimasAtualizacoesNovoNome.removeChild(ultimoItemNovoNome);

///5/// EXTRA

const alternarTemaBotaoNovoNome = document.getElementById("alternar-tema");

alternarTemaBotaoNovoNome.addEventListener("click", () => {
    document.body.style.backgroundColor = "#555";
    document.body.style.color = "#fff";
});