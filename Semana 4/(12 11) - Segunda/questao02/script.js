function enviarReserva() {
    const novoNome = document.getElementById('novoNome').value;
    const novoTelefone = document.getElementById('novoTelefone').value;
    const novaData = document.getElementById('novaData').value;

    if (invalidaTelefone(novoTelefone)) {
        alert('DIGITE UM TELEFONE VÁLIDO! ');
        return;
    }

    const div = document.getElementById('dadosReserva');
    div.innerHTML = `
        <span>DADOS DA RESERVA</span>
        <p>Nome: ${novoNome}</p>
        <p>Telefone: ${novoTelefone}</p>
        <p>Data: ${novaData}</p>
    `;

    document.getElementById('reservaForm').reset();
}

function invalidaTelefone(telefone) {
    const tel = telefone.replace(/\D/g, '');

    return tel.length < 10;
}
