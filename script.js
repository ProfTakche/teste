const meta = 600;
let arrecadado = 50;

function atualizarBarra() {
  const porcentagem = (arrecadado / meta) * 100;
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');

  // Atualiza a altura da barra
  progressBar.style.height = `${porcentagem}%`;

  // Calcula a cor da barra (de vermelho para verde)
  const red = Math.max(255 - Math.floor((porcentagem / 100) * 255), 0);
  const green = Math.min(Math.floor((porcentagem / 100) * 255), 255);
  progressBar.style.backgroundColor = `rgb(${red}, ${green}, 0)`;

  // Atualiza o texto de progresso
  progressText.textContent = `${arrecadado} de ${meta} caixas arrecadadas (${porcentagem.toFixed(2)}%)`;
}

// Inicializa a barra
atualizarBarra();
