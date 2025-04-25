
/*  Gerador de número aleatório.

let número = Math.random();

console.log(número);       

Dois principais erros desse programa é que ele gera número decimal e também com muitas casas decimais.
*/


/*Pense nos erros que o programa possa ter, vamos supor que queremos gerar número de 1 a 5, o programa por padrão considera sempre o número zero e por isso se o limite é 5 considerando o zero vai mostrar até o número 4 e já sabendo disso devemos corrigir isso somando com o número 1, lembre-se também que devemos colocar o limite que é o número 5.
    A propriedade que vamos usar para gerar números aleatório é o Math.random() que será sempre multiplicado com o número limite assim Math.random() * 5
    Mais ainda há outra coisa que pode incomodar que é vários algarimos depois do ponto, para resolver devemos utilizar dois tipos de parâmetros, o Math.floor() que arredonda para baixo ou o Math.trunc() que corta a parte decimal.
    */

/*Dica de estrutura, coloque um parâmetro para elimar as casas decimais primeiro e depois coloque a estrutura que vai gerar um número aleatório com o limite incluso assim (Math.random() *5 ), feche a estrutura do número aleatório dentro da estrutura do parâmetro que elimina as casas decimais, agora para tirar o número zero da jogada some toda a estrutura com o número 1, dessa forma:

let número = Math.trunc((Math.random() * 5)) + 1;    

console.log(número)                                                        

O parenteses fechando a estrutura Math.random() é para deixar a ordem de procedência bem clara e evitar possíveis erros.                                        
  */


/*
Para uma estrutura mais robusta observe o exemplo abaixo:


let max = 5;
let aleatorio;

aleatorio = Math.trunc(( Math.random() * max )) + 1;

console.log(aleatorio)


Ou ainda você pode fazer dessa forma:

let maior = 5;
let menor = 1;
let valorAleatorio;

valorAleatorio = Math.trunc(Math.random() * maior) + menor;

console.log(valorAleatorio);

*/


//Se você quiser gerar números aleatório entre um determinado intervalo por exemplo entre o número 5 e o número 10, incluindo o 5 e o 10 também, faça isso:


let maior = 10;
let menor = 5;
let numero;

numero = Math.trunc( Math.random() * (maior - menor + 1) ) + menor;

console.log(numero);


//Explicação: Maior é igual a 10, menor é igual 5, e somado com o número 1 para gerar seis números por que 10 - 5 + 1 = 6, ou seja, intervalo com 6 números (5, 6, 7, 8, 9, 10), agora você tem que somar com o limite menor para orientar o programa à não adicionar valor menor que o limite menor informado que no caso é 5, ou seja, ao orientar, ele não vai colocar um valor menor que 5 por exemplo 4 ou 3 enfim, se você não somar com o limite menor o que pode acontecer é, ele ainda sim vai contabilizar 6 algarismos mas ele vai incluir o número zero, ou seja, o máximo vai até 5 por que ele conta os 6 algarismos partindo do zero até chegar no sexto algarismo que é 5, resumindo, o intervalo de 5 e 10 vai acabar não acontecendo, 5 e 10 vai servir apenas para dizer que vai ser intervalo de 6 algarismos sem orientação nenhuma, e sem orientação nenhuma o programa vai contabilizar a parti do zero até fechar seis algarismos.




