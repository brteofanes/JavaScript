
// Vamos trabalhar com a constante Pi, a lógica do programa é fornecer a circunfêrencia com base no raio informado pelo usuário do programa.


/*Constante não permite mudança, exemplo: adicionamos a variável "circunferência" que colocamos o cálculo da circunferência como parâmetro, ou seja, ela permite alterações o que não acontece com a variável "PI" que é uma constante por "const" e não "let"*/

const PI = 3.142573;
let raio;
let circunferência;


// Crie um pop-up de entrada.
raio = window.prompt("Entre com o raio de um círculo");    


//Determine a regra do cálculo da circunferência.
circunferência = 2 * PI * raio;                


//Determine a classe String para Number(número).
raio = Number(raio);                           


//Imprima o resultado no DevTools.
console.log("Lembre-se, você colocou um raio de "+raio+" e o resultado do cálculo da circunferência é este "+circunferência);                   



