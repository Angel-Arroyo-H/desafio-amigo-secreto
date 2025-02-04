//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo(){    
    limpaTexto('resultado');
    let amigo = document.getElementById('amigo').value;
    validaEntrada(amigo);
    limpaCampo('amigo');
    console.log(listaDeAmigos);
    exibeLista(listaDeAmigos);
}

function sortearAmigo(){
    // Valida se a lista não é vazia
    if (listaDeAmigos.length == 0){
        alert('Deve adicionar o nome dos seus amigos antes de sortear.');
    }else{
        let amigoSorteado = selecionaAmigoAleatoriamente(listaDeAmigos);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O nome do seu amigo secreto é: ${amigoSorteado}`;
        resetaElementos();
    }
}

function validaEntrada(amigo){
    // valida que o nome inserido não seja vazio
    if(amigo.trim() === ''){
        alert('Entrada inválida: Digite um nome.');
    }else{
        // Valida nome repetido
        if(listaDeAmigos.includes(amigo)){
            alert('Esse nome já foi registrado.')
        }else{
            listaDeAmigos.push(amigo);
        }
    }
}

function limpaCampo(nomeCampo){
    let campo = document.getElementById(nomeCampo);
    campo.value = '';
}

function limpaTexto(id){
    let campo = document.getElementById(id);
    campo.innerHTML = '';
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

function selecionaAmigoAleatoriamente(lista){
    let indice = Math.floor(Math.random()*lista.length);
    return lista[indice];
}

function resetaElementos(){
    listaDeAmigos = [];
    limpaTexto('listaAmigos');
}