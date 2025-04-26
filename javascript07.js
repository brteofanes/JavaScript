//Vamos utilizar a constante, folha de estilo CSS e Efeito sonoro.

const h1 = document.getElementById("contagem");


const decrescente = document.getElementById("decrescente");
const crescente = document.getElementById("crescente");
const limpaacontagem = document.getElementById("fazalimpa");

let conta = 0;       

// Função que garante que o som sempre começará do zero.
function tocarSom(arquivo) {
    const som = new Audio(arquivo);
    som.play();

}

decrescente.onclick = function() {
    conta--;
    h1.textContent = conta;
    tocarSom('sonoridade07.mp3');
    //somClique.play();  toca som
}

crescente.onclick = function() {
    conta++;
    h1.textContent = conta;
    tocarSom('sonoridade07.mp3');
}

limpaacontagem.onclick = function() {
    conta = 0;
    h1.textContent = conta;
    tocarSom('sonoridade07.mp3');
}



/*Observe a análise crítica sobre colocar som, Para carregar o som basta fazer isso:
const somClique = new Audio('sonoridade7.mp3'); dessa forma há um erro que vai acontecer de você apenas chamar o áudio que vai ser tocado e colocar na função do botão com o parâmetro somClique.play(); será de ele apenas considerar o próximo toque quando o toque anterior parar de reproduzir, e muitas vezes o toque que adicionamos tem parte que está em silêncio no áudio e enquanto o áudio não for terminado ao clicar no botão novamente o áudio não vai acompanhar a acão de clique do botão uma vez que o áudio anterior ainda não terminou.
 Para você fazer com que o áudio toque na hora do clique do botão independentemente se o áudio do toque anterior terminou ou não, você tem que adicionar essa função:

 function tocarSom(arquivo) {
    const som = new Audio(arquivo);
    som.play();

}
    e adicionar em cada botão esta linha de código:
    tocarSom('sonoridade7.mp3');

Isso vai eliminar a espera do áudio acabar para depois tocar de novo, agora toda vez que você clicar no botão o som vai tocar quantas vezes você clicar no botão, ou seja, cada clique reinicia o áudio.     */