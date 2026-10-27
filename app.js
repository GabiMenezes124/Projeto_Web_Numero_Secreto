// let titulo = document.querySelector('h1');  criando uma variavel que vai utilizar o método 'document' para acessar o arquivo HTML e manipular conforme a linguagem javascript;
// titulo.innerHTML = 'Jogo do Numero Secreto';  aqui pegamos a variavel criada e alteramos o valor referente a linha de código do arquivo HTML para um novo valor;

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let numeroSecreto = gerarNumeroAleatorio();

// as funções são um meio de boa prática de aplicação em código, pois elas reduzem o acoplamento e permite um fácil entendimento;
function exibirTextoNaTela(tag, texto) { 
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


function verificarChute() { // criamos uma função para determinar uma ação dentro do programa criado;
    let chute = document.querySelector('input').value; //criamos uma variavel que vai armazenar um valor inserido pelo usuario na web (HTML);
    console.log(chute == numeroSecreto); // aqui vamos manipular atráves de um valor oque será abordado na função;
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}