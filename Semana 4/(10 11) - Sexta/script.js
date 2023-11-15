function esconderImagem() {
    const divImagem = document.getElementById('foto');
    if (divImagem.style.visibility === 'hidden') {
        divImagem.style.visibility = 'visible';
    } else {
        divImagem.style.visibility = 'hidden';
    }
}

function alterarTexto() {
    const divTexto = document.getElementById('sobre');
    const input = document.getElementById('formato');
    divTexto.style.textAlign = input.value;
}

function alterarCor() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const input = document.getElementById('cor');
    
    if (input.value === 'preto') {
        header.style.backgroundColor = 'black';
        header.style.color = 'white';
        footer.style.backgroundColor = 'black';
        footer.style.color = 'white';
    } else if (input.value === 'branco') {
        header.style.backgroundColor = 'white';
        header.style.color = 'black';
        footer.style.backgroundColor = 'white';
        footer.style.color = 'black';
    }
}
function alteraFonte() {
    const divTexto = document.getElementById('sobre');
    const input = document.getElementById('font');
    divTexto.style.fontFamily = input.value;
}
function modo() {
    const sec = document.getElementById('conteudo');
    if (sec.style.backgroundColor === 'white') {
        sec.style.backgroundColor = 'black';
        sec.style.color = 'white';
    } else {
        sec.style.backgroundColor = 'white';
        sec.style.color = 'black';
    }
}
