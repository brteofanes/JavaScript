
//Math.round(3.2);  Arredonda para o inteiro mais próximo.

//Math.floor(3.2);    Arredonda para baixo.

//Math.ceil(3.2);     Arredonda para cima memos que a parte decimal seja mínima.

//Math.trunc(3.2)     Corta a parte decimal.

//Math.pow(3,2)       Potência, o primeiro número é a base, o segundo, expoênte.

//Math.sqrt(9)        Raíz quadrada (Square Root).

//Math.log10(9)       Logaritmo.

//Math.sin(9)         Seno.

//Math.cos(9)         Cosseno.

//Math.tan(9)         Tangente.

//Math.abs(-9)      Torna o valor absoluto, ou seja, tira o sinal de negativo.        

//console.log(Math.abs(-9));

/*Entenda essa lógica, para que o código aconteça na mesma estrutura essa é a linha de código:

console.log(Math.sqrt(9));          */


//Agora se você quizer uma coisa mais robusta pode fazer assim:

//let número = 9;

//número = Math.sqrt(9)

//console.log(número);

let x = 7;

let y = 8;

let z = 9;

let máximo = Math.max(x, y, z)          //Mostra o maior número entre os três;
let mínimo = Math.min(x, y, z)          //Mostra o menor número entre os três;

console.log(máximo);
console.log(mínimo);
