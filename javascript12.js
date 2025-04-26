// 2 Ids (botão, exibenúmero)

const clique = document.getElementById("botão") //botão é uma variável que não altera.

let exibe1 = document.getElementById("exibenúmero1")
let exibe2 = document.getElementById("exibenúmero2")
let exibe3 = document.getElementById("exibenúmero3")

let exibe4 = document.getElementById("exibenúmero4")
let exibe5 = document.getElementById("exibenúmero5")
let exibe6 = document.getElementById("exibenúmero6")

let mensagem = document.getElementById("mensagem")

// Gerando números de 1 a 60;

let maior = 60;
let menor = 1;

let valorqualquer1;
let valorqualquer2;
let valorqualquer3;

let valorqualquer4;
let valorqualquer5;
let valorqualquer6;



function toquesom(música){
    const toque = new Audio(música)
    toque.play()
}



clique.onclick = function(){

    toquesom("sonoridade07.mp3")


    valorqualquer1 = Math.trunc(Math.random() * (maior - menor + 1)) + menor;
    valorqualquer2 = Math.trunc(Math.random() * (maior - menor + 1)) + menor;
    valorqualquer3 = Math.trunc(Math.random() * (maior - menor + 1)) + menor;

    valorqualquer4 = Math.trunc(Math.random() * (maior - menor + 1)) + menor;
    valorqualquer5 = Math.trunc(Math.random() * (maior - menor + 1)) + menor;
    valorqualquer6 = Math.trunc(Math.random() * (maior - menor + 1)) + menor;
    //(maior - menor + 1) é a qualtidade de intervalo.
    //  + menor; é o limite mínimo do intervalo.

    exibe1.textContent = valorqualquer1;
    exibe2.textContent = valorqualquer2;
    exibe3.textContent = valorqualquer3;

    exibe4.textContent = valorqualquer4;
    exibe5.textContent = valorqualquer5;
    exibe6.textContent = valorqualquer6;

    //Faz com que o resultado da variável "valorqualquer1" apareça na variável "exibe1" que tem o id = "exibenúmero1" que é da tag label no HTML, o resultado vai aparecer pela tag label ao aperta o botão.
    mensagem.textContent = "* As vezes pode cair dois ou mais números repetidos, se isso acontecer aperte no botão novamente para gerar outra sequencia aleatória."

}