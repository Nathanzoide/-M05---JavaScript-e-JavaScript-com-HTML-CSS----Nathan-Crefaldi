function Cadastro() {
    const novoNome = document.getElementById('novoNome').value;
    const novoEmail = document.getElementById('novoEmail').value;
    const novaSenha = document.getElementById('novaSenha').value;
  
    const div = document.createElement('div');
  
    div.innerHTML = `
      <span>DADOS DO USUÁRIO</span>
      <p>Nome: ${novoNome}</p>
      <p>Email: ${novoEmail}</p>
      <p>Senha: ${novaSenha}</p>
    `;
  
    document.body.appendChild(div);
  
    document.getElementById('cadastroForm').reset();
  }
  