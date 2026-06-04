let avatarEscolhido = "";
let pontos = 0;
let perguntaAtual = 0;

/* =======================
   DICAS
======================= */

const dicas = [

"💧 Um banho de 5 minutos pode economizar mais de 50 litros de água.",

"🌳 Uma árvore adulta pode absorver até 22 kg de CO₂ por ano.",

"♻️ Reciclar uma lata de alumínio economiza energia suficiente para manter uma TV ligada por horas.",

"🚲 Andar de bicicleta reduz a emissão de gases poluentes.",

"🌱 Comprar de produtores locais fortalece o campo e reduz impactos ambientais.",

"💡 Apagar luzes desnecessárias ajuda a preservar recursos naturais.",

"🚜 O agro sustentável produz alimentos respeitando o meio ambiente.",

"🐝 As abelhas são responsáveis pela polinização de grande parte dos alimentos que consumimos.",

"🌎 Pequenas atitudes diárias podem gerar grandes mudanças para o planeta.",

"🌿 Separar resíduos corretamente facilita a reciclagem."

];

document.getElementById("dica").innerHTML =
dicas[Math.floor(Math.random() * dicas.length)];

/* =======================
   DESAFIOS
======================= */

const desafios = [

"💧 Ficar 1 dia sem desperdiçar água",

"🌳 Plantar uma muda de árvore",

"♻️ Separar lixo reciclável durante uma semana",

"💡 Apagar as luzes ao sair dos cômodos",

"🚫 Utilizar menos plástico por 3 dias"

];

document.getElementById("desafio").innerHTML =
desafios[Math.floor(Math.random() * desafios.length)];

/* =======================
   AVATAR
======================= */

function selecionarAvatar(img){

document
.querySelectorAll(".avatares img")
.forEach(a => a.classList.remove("selecionado"));

img.classList.add("selecionado");

avatarEscolhido = img.src;

}

/* =======================
   LOGIN
======================= */

function entrar(){

let nome =
document.getElementById("nome").value;

if(nome === "" || avatarEscolhido === ""){

alert("Digite seu nome e escolha um avatar!");

return;

}

document.getElementById("login").style.display = "none";

document.getElementById("site").style.display = "block";

document.getElementById("boasVindas").innerHTML =
"Bem-vindo(a), " + nome + "!";

document.getElementById("avatarUsuario").src =
avatarEscolhido;

}

/* =======================
   CALCULADORA DE ÁGUA
======================= */

function calcularAgua(){

let banho =
document.getElementById("banho").value;

if(banho === ""){

alert("Digite os minutos do banho.");

return;

}

let litros = banho * 9;

document.getElementById("resultadoAgua").innerHTML =

"💧 Você gastou aproximadamente " +
litros +
" litros de água.";

pontos += 10;

atualizarPontos();

}

/* =======================
   QUIZ
======================= */

const perguntas = [

{
pergunta:"Qual atitude economiza mais água?",
opcoes:[
"Banho de 5 minutos",
"Lavar calçada com mangueira",
"Deixar torneira aberta"
],
correta:0
},

{
pergunta:"O que pode ser reciclado?",
opcoes:[
"Garrafa PET",
"Resto de comida",
"Papel higiênico"
],
correta:0
},

{
pergunta:"Qual energia é renovável?",
opcoes:[
"Solar",
"Carvão",
"Petróleo"
],
correta:0
},

{
pergunta:"Qual prática ajuda o meio ambiente?",
opcoes:[
"Separar lixo",
"Jogar lixo no rio",
"Queimar resíduos"
],
correta:0
},

{
pergunta:"O que reduz a poluição?",
opcoes:[
"Andar de bicicleta",
"Usar mais carros",
"Queimar lixo"
],
correta:0
},

{
pergunta:"Qual animal é importante para a polinização?",
opcoes:[
"Abelha",
"Tubarão",
"Cobra"
],
correta:0
},

{
pergunta:"Qual atitude ajuda o planeta?",
opcoes:[
"Economizar energia",
"Desperdiçar água",
"Jogar lixo na rua"
],
correta:0
}

];

function carregarPergunta(){

let p = perguntas[perguntaAtual];

document.getElementById("pergunta").innerHTML =
p.pergunta;

let respostas = "";

p.opcoes.forEach((opcao,index)=>{

respostas += `
<button onclick="responder(${index})">
${opcao}
</button>
`;

});

document.getElementById("respostas").innerHTML =
respostas;

}

function responder(indice){

let p = perguntas[perguntaAtual];

if(indice === p.correta){

document.getElementById("resultadoQuiz").innerHTML =
"✅ Resposta correta! +20 pontos";

pontos += 20;

}else{

document.getElementById("resultadoQuiz").innerHTML =
"❌ Resposta incorreta.";

}

perguntaAtual++;

if(perguntaAtual < perguntas.length){

setTimeout(carregarPergunta,1000);

}else{

document.getElementById("pergunta").innerHTML =
"🎉 Quiz Finalizado!";

document.getElementById("respostas").innerHTML =
"";

}

atualizarPontos();

}

/* =======================
   PONTOS E MEDALHAS
======================= */

function atualizarPontos(){

document.getElementById("pontuacao").innerHTML =
pontos + " pontos";

let medalha = "🌱 Iniciante Verde";

if(pontos >= 50){
medalha = "🌿 Guardião da Natureza";
}

if(pontos >= 100){
medalha = "🌎 Herói Sustentável";
}

if(pontos >= 150){
medalha = "🏆 Mestre do Agro Sustentável";
}

document.getElementById("medalha").innerHTML =
medalha;

}

/* =======================
   INICIAR QUIZ
======================= */

window.onload = function(){

carregarPergunta();

};
/* =======================
   ECOBOT
======================= */

const mensagensMascote = [

"🌱 Economizar água ajuda o planeta.",

"🐝 As abelhas são essenciais para a agricultura.",

"🚜 O agro sustentável produz e preserva.",

"♻️ Reciclar é cuidar do futuro.",

"💡 Desligue as luzes quando não estiver usando.",

"🌳 Plantar árvores melhora a qualidade do ar.",

"💧 Cada gota de água faz diferença."

];

function novaDica(){

let mensagem = mensagensMascote[
Math.floor(
Math.random() * mensagensMascote.length
)
];

document.getElementById("falaMascote")
.innerHTML = mensagem;

}

/* =======================
   SIMULADOR
======================= */

function simulador(tipo){

let resultado =
document.getElementById(
"resultadoSimulador"
);

if(tipo === "sustentavel"){

resultado.innerHTML =

"🌱 Excelente escolha!<br><br>" +

"💧 Economia de água: 95%<br>" +

"🚜 Produção agrícola: 90%<br>" +

"🌎 Sustentabilidade: 100%<br><br>" +

"🏆 Você criou uma fazenda sustentável!";

pontos += 30;

}else{

resultado.innerHTML =

"⚠️ Essa opção utiliza mais água.<br><br>" +

"💧 Economia de água: 30%<br>" +

"🚜 Produção agrícola: 70%<br>" +

"🌎 Sustentabilidade: 40%<br><br>" +

"🌱 Tente escolher alternativas mais sustentáveis.";

}

atualizarPontos();

}