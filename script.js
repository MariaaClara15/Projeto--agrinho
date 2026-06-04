let avatarEscolhido = "";
let pontos = 0;

const dicas = [

"Feche a torneira ao escovar os dentes.",

"Use garrafas reutilizáveis.",

"Separe o lixo reciclável.",

"Economize energia desligando luzes.",

"Plante uma árvore."

];

document.getElementById("dica").innerHTML =
dicas[Math.floor(Math.random()*dicas.length)];

function selecionarAvatar(img){

document
.querySelectorAll(".avatares img")
.forEach(a=>a.classList.remove("selecionado"));

img.classList.add("selecionado");

avatarEscolhido = img.src;
}

function entrar(){

let nome =
document.getElementById("nome").value;

if(nome == "" || avatarEscolhido==""){

alert("Digite seu nome e escolha um avatar!");

return;
}

document.getElementById("login")
.style.display="none";

document.getElementById("site")
.style.display="block";

document.getElementById("boasVindas")
.innerHTML =
"Bem-vindo(a), "+nome+"!";

document.getElementById("avatarUsuario")
.src = avatarEscolhido;

}

function calcularAgua(){

let banho =
document.getElementById("banho").value;

let litros = banho * 9;

document.getElementById("resultadoAgua")
.innerHTML =
"Você gastou aproximadamente "
+ litros +
" litros de água.";

pontos += 10;

atualizarPontos();

}

function quiz(resposta){

if(resposta == 1){

document.getElementById("resultadoQuiz")
.innerHTML =
"✅ Resposta correta!";

pontos += 20;

}else{

document.getElementById("resultadoQuiz")
.innerHTML =
"❌ Tente novamente.";
}

atualizarPontos();

}

function atualizarPontos(){

document.getElementById("pontuacao")
.innerHTML =
pontos + " pontos";

}