//Para este programa vamos usar a constante;



const h1 = document.getElementById("contagem");



const decrescente = document.getElementById("decrescente");
const crescente = document.getElementById("crescente");
const limpaacontagem = document.getElementById("fazalimpa");

let conta = 0;

decrescente.onclick = function(){

    conta --;

    h1.textContent = conta;

}

crescente.onclick = function(){

    conta ++;
    h1.textContent = conta;

}

limpaacontagem.onclick = function(){


    conta = 0;
    h1.textContent = conta;


}