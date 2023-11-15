function adicionarTarefa() {
    const descricaoNovaTarefa = document.getElementById('descricaoNovaTarefa').value;
    const listaDeTarefas = document.getElementById('listaDeTarefas');

    const novaTarefa = document.createElement('li');
    novaTarefa.innerHTML = `
        <p>${descricaoNovaTarefa}</p>
        <button onclick="removerTarefa(this)">REMOVER</button>
    `;

    listaDeTarefas.appendChild(novaTarefa);

    document.getElementById('formularioTarefa').reset();
}

function removerTarefa(botao) {
    const tarefa = botao.parentNode;
    tarefa.remove();
}
