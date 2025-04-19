/* Esse código tem algumas falhas, ele permite digitar zero e números negativos normalmente e números positivos à cima de 90;

let idade = 100

if(idade<=15){
    console.log("Você ainda não pode votar!");
} else{
    console.log("Você já tem idade suficiente, já pode votar!");
};*/

//O código abaixo será para corrigir os erros do código à cima, fique sempre atento na ordem de procedência. os resultados serão mostrados no console do navegador. Lembrando que o próximo código que será o Java script9 ele vai ser a mesma lógica e os mesmos parâmetros só que vai ser na página web e não no console do navegador.

let idade = 16;

if(idade<=0){
    console.log("É impossível você ter essa idade, por favor coloque uma idade válida.")
} else if(idade<=15){
    console.log("infelizmente você não tem idade suficiente para votar.")
} else if(idade>=100){
    console.log("Você está muito velho ou não informou a idade certa, verifique seus dados novamente.")
}else{
    console.log("Parabéns! você já pode votar.")
}