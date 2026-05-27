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
function atualizarPontuacao() {

  document.getElementById("pontuacao").innerText =
    pontos + " pontos";

  let nivel = "🌱 Iniciante Verde";

  if (pontos >= 50) {
    nivel = "🌿 Guardião Ambiental";
  }

  if (pontos >= 100) {
    nivel = "🌍 Herói da Natureza";
  }

  document.getElementById("nivel").innerText = nivel;
}
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Earth() {
  const earthRef = useRef();

  useFrame(() => {
    earthRef.current.rotation.y += 0.002;
  });

  return (
    <Sphere ref={earthRef} args={[2, 64, 64]}>
      <meshStandardMaterial
        color="#2E7D32"
        emissive="#39FF88"
        roughness={0.7}
        metalness={0.2}
      />
    </Sphere>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <Stars radius={100} depth={50} count={5000} factor={4} />

      <Earth />
    </Canvas>
  );
}