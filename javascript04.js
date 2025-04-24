
//Os resultados serão executados no DevTools da página.

console.log("Trabalhando com Números, Operadores e Classes númericas")


let numero = 10;

numero = numero + 1;    //forma longa

//numero +=1;            //forma curta

console.log(numero);

let nu = 30;

//nu = nu /10;    //forma longa

nu /=10;        //forma curta

console.log(nu);

let num = 50;

num = num %2;       //50/2 = 2 resto 0

//num %=2;

console.log(num);

let p = 70;

//p = p**2;

p**=2;

console.log(p);

let t = 90;

t = t*2;

//t *= 2;

console.log(t);

let q = 110;

//q = q - 10;

q -= 10;

console.log(q);

let u = 130;

u --;   //movimentação de unidade.

console.log(u);

let s = 5;

s ++;   //movimentação de unidade.

console.log(s);

/*Ordem de procedência
1. Parênteses 
2. Potência/Expoente
3. Multiplicação, Divisão e Módulo.
4. Adição e Subtração.*/

let operação = 1 + 2 * 3 + 4 ** 2;
console.log(operação);


//Sobre tipoclasses

let comida1 = "maçã"
let comida2 = "laranja"
let comida3 = "goiaba"
console.log("Vamos definir essas variáveis: "+comida1+", "+comida2+" e "+comida3+".")

comida1 = String(comida1);
comida2 = Number(comida2);
comida3 = Boolean(comida3);

console.log(comida1,"é Sring? "+typeof comida1);
console.log("Laranja é String? "+comida2+", que classe é então? ",typeof comida2);
console.log("Goiaba é boolean? "+comida3+", então é ",typeof comida3);
console.log("Essas classes foram definida forçadamente, não é possível Laranja ser número, mas ela foi forçada a ser porque definimos ela como classe Number porém ainda sim mostra NaN que é Not a No dizendo que não é número, mas quando pedimos o tipo(typeof) mostra a classe Number.");


//No javascript5 vamos analisar melhor o uso de classe e a importância na hora de usar cada uma delas.