//input, botão e resposta.

const entrada = document.getElementById("input");
const tecla = document.getElementById("botão");
const valor = document.getElementById("resposta");

let idade;

/*Sempre observe os possíveis erros, isto é, analise os possíveis erros do programa que você quer criar e coloque eles para serem executados primeiros como forma de corrige qualquer falha pois se você colacar depois pode ser que não seja corrigido devido a ordem de procedência:
    Exempo: para maiores de 16 anos é possível votar, para menores com menos de 16 anos não é possível votar.
    Há dois possíveis erros, primeiro deles, se colocar uma idade inferior ou igual a zero o programa vai contabilizar normalmente como se fosse menor de idade e está errado, o segundo erro é se a pessoa colocar uma idade igual ou superior a 100 que também é um erro porque não é possível alguém ter 100 anos ou mais.
    Pensando nisso corrija logo os erros colocando uma mensagem de inválido para esses dois possíveis erros ou qualquer outra coisa do tipo sinalizando que não é possível verificar com esses dados falsos, então pela ordem de procedência eles devem ser colocados primeiros dentro da função do botão.*/


tecla.onclick = function(){
    idade = entrada.value;     //atribui o valor da "entrada" para a variável "idade".
    idade = Number(idade);     //especifica a classe trabalhada.
    if(idade <= 0){
        valor.textContent = `Não é possível você ter essa idade, a menos que você seja um embrião.`
    } else if(idade >= 100){
        valor.textContent = `Você está muito velho, deveria descansar numa rede de tucum.`
    } else if(idade <= 15){
        valor.textContent = `Você não tem idade suficiente para votar.`
    }
    else{
        valor.textContent = `Você já tem idade suficiente para votar prossiga.`
    };
    
}

//Observação: A única variável que foi modificado foi a "let" o que é normal, mas perceba que foi adicionado constantes "const", em relação a constantes não é possível modificar pois constante não pode ser alterada.



