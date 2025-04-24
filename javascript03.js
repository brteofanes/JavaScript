
/*Objetivo: trocar o que está no título do h1 para o que for colocado no input, e a troca, ao aperta o botão.
Para isso:*/



//Adicione uma variável.
let usuario;



//Adicione uma função para o botão.
document.getElementById("botão").onclick = function(){
    

    
    //atribuia o valor do input id "preencha" na variável usuario. 
    usuario = document.getElementById("preencha").value;      
    


    //Faça a troca do título h1 id "nomeusuario" pela variável usuario
    document.getElementById("nomeusuario").textContent = `Olá ${usuario}`   
    

}

 
/*
A variável deve receber o valor do input, após isso, chame o id do h1 para ser substituído pela variável "usuario" que agora está valendo o input, a variável passou a valer o input na linha 11, foi quando atribuimos o valor do input a ela, isto é, o que o usuário colocar no input ao clicar no botão vai substituir o h1 porque está dentro da função do botão.

No javascript4 começaremos a adentrar nos assuntos de matemática utilizando número.

*/