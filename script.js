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
function trocarAvatar(imagem) {
  document.getElementById("avatarEscolhido").src = imagem;

  pontos += 5;

  atualizarPontuacao();
}