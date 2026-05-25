let pontos = 0;

// ATUALIZA PONTUAÇÃO
function atualizarPontuacao() {
  document.getElementById("pontuacao").innerText =
    pontos + " pontos";
}

// QUIZ
function respostaCorreta() {
  pontos += 10;

  atualizarPontuacao();

  document.getElementById("resultadoQuiz").innerText =
    "✅ Resposta correta!";
}

function respostaErrada() {
  document.getElementById("resultadoQuiz").innerText =
    "❌ Resposta errada!";
}

// CALCULADORA DE ÁGUA
function calcularAgua() {
  let banho = document.getElementById("banho").value;

  let litros = banho * 9;

  document.getElementById("resultadoAgua").innerText =
    "Você gasta aproximadamente " +
    litros +
    " litros por banho.";
}

// DICAS
const dicas = [
  "Desligue a torneira ao escovar os dentes.",
  "Use sacolas reutilizáveis.",
  "Apague as luzes ao sair.",
  "Recicle o lixo corretamente.",
  "Economize água no banho."
];

function gerarDica() {
  let numero = Math.floor(Math.random() * dicas.length);

  document.getElementById("dica").innerText =
    dicas[numero];
}

// DESAFIOS
const desafios = [
  "Fique 1 dia sem copos descartáveis.",
  "Plante uma árvore.",
  "Economize água hoje.",
  "Separe o lixo reciclável.",
  "Ande de bicicleta."
];

function novoDesafio() {
  let numero = Math.floor(Math.random() * desafios.length);

  document.getElementById("desafio").innerText =
    desafios[numero];

  pontos += 5;

  atualizarPontuacao();
}
.avatares {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.avatar-opcao {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  border: 3px solid transparent;
}

.avatar-opcao:hover {
  transform: scale(1.1);
  border-color: #2d6a4f;
}

.avatar-principal {
  width: 150px;
  margin-top: 20px;
  border-radius: 50%;
  border: 5px solid #2d6a4f;
}