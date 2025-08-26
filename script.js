document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const servico = document.getElementById('servico').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;

  if (!nome || !cpf || !servico || !data || !hora) {
    document.getElementById('mensagem').textContent = 'Preencha todos os campos!';
    return;
  }

  document.getElementById('mensagem').textContent = `Serviço agendado com sucesso para ${data} às ${hora}!`;

  adicionarAgendamentoNaTabela({ nome, cpf, servico, data, hora });

  this.reset();
});

function adicionarAgendamentoNaTabela(agendamento) {
  const tabela = document.querySelector('#listaAgendamentos tbody');
  const linha = document.createElement('tr');

  linha.innerHTML = `
    <td>${agendamento.nome}</td>
    <td>${agendamento.cpf}</td>
    <td>${agendamento.servico}</td>
    <td>${agendamento.data}</td>
    <td>${agendamento.hora}</td>
    <td><button onclick="marcarPresenca(this)">Marcar Presença</button></td>
  `;

  tabela.appendChild(linha);
}

function marcarPresenca(botao) {
  botao.textContent = "Presença Confirmada";
  botao.disabled = true;
  botao.classList.add("presenca-confirmada");
}
