// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; //lista de nombres a sortear


//funcion para agregar un nombre a una lista
function agregarAmigo(){
    let nombreAmigo = document.querySelector('#amigo').value.trim(); //entrada sin espacios demas

    if(nombreAmigo === ''){ //comprobar espacio vacío
        
        alert('Por favor, inserte un nombre.'); 
        return;
    }else{
        amigos.push(nombreAmigo) //añadir nombre a la lista
    }
    mostrarLista(); //mostrar lista de  nombres en pantalla
    nombreAmigo = document.querySelector('#amigo').value = '' //limpiar la barra
}

function mostrarLista(){ 
    let ul = document.querySelector('#listaAmigos'); 

    ul.innerHTML='';

    for (let i = 0; i < amigos.length; i++) {
        ul.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){

    //comprobar si esta vacia la lista

    if (amigos.length ==0){
        alert('No hay amigos en la lista para sortear');
    }else{

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    console.log(indiceAleatorio)

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento con id "resultado"
    let ulResultado = document.getElementById('resultado');
    ulResultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
    }
    
}