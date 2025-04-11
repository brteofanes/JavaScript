
/*Por padrão será sempre String, para configurar para outra classe deve especificar o tipo.
    O programa a seguir é um exemplo clássico da necessidade de especificar a classe.
Se você colocar um número para qualquer operação dependendo do número ele vai concatenar ao invés de fazer a operação porque por padrão a classe não especificada é String, ou seja, símbolos e letras.
 .

let idade = window.prompt("Qual é sua idade? ");

idade +=1;

console.log(idade);         */

//Mostrado no DevTools.



let altura = window.prompt("Qual é a sua altura? ela será somada com 1 ");

altura = Number(altura);            //Especifica a classe

altura +=1;                         //Faz operação.

console.log(altura);                //Mostra no DevTools


/*Mais uma vez, atenção com a ordem de procedência porque se a linha 21 que é a que específica a classe estiver abaixo da linha 23 que é a que faz operação, então não vai definir a classe antes da operação o que significa que vai continuar sem classificar e consequentemente vai concatenar deixando de fazer a operação.
    No javascript6.js vamos dar mais foco a matemática mais precisamente em constante.
    
*/