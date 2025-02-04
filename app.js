//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;
    validaEntrada(amigo);
    limpaCampo();
    console.log(listaDeAmigos);
    exibeLista(listaDeAmigos);
}

function validaEntrada(amigo){
    // valida que o nome inserido não seja vazio
    if(amigo.trim() === ''){
        alert('Entrada inválida: Digite um nome.');
    }else{
        listaDeAmigos.push(amigo);        
        // Podemos adicionar confirmação caso o nome seja um possivel número
    }
}

function limpaCampo(){
    let campo = document.getElementById('amigo');
    campo.value = '';
}

function exibeLista(lista){
    let campo = document.getElementById('listaAmigos');
    campo.innerHTML = 'Lista de amigos:';
    for(let i = 0; i < lista.length; i++){
        let item = document.createElement('li');
        item.textContent = lista[i];
        campo.appendChild(item);
    }
}
