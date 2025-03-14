const boton = document.getElementById("check-btn")


const handle = (e)=>{
    e.preventDefault()
    const input = document.getElementById("text-input").value
    const palabras = logicaPalindromo(input)//ak hago logica
    convertir(palabras);    
}

boton.addEventListener("click",handle);

const logicaPalindromo=(input)=>{
    let arrayPalabras = input.toLowerCase().split(" ")
    
    if(arrayPalabras.length === 1){
        arrayPalabras = input.split("");
    }else if(arrayPalabras.length > 1){ 
        arrayPalabras = arrayPalabras.join("")
        arrayPalabras = arrayPalabras.split("")
        console.log(arrayPalabras);
    }
    
    

    let palabraAlreves ="";
    for (let i = arrayPalabras.length - 1; i >=0; i--) {
        palabraAlreves= palabraAlreves + arrayPalabras[i]
        }
    
    const palabrasUnidas= arrayPalabras.join("");    
    
    console.log(palabrasUnidas);
    console.log(palabraAlreves);
    
    if(palabraAlreves === palabrasUnidas){
    console.log("la frase es palindroma");
    return `${palabrasUnidas} Es palindromo`
    } else {
        return `${palabrasUnidas} No es palindromo`
    }

}


const renderizarPalabra = (palabras)=>{
const palabra = document.createElement("p")
palabra.innerHTML = palabras
return palabra;
}


const convertir=(palabras)=>{
    const contenedorPalabra= document.getElementById("result");
    contenedorPalabra.innerHTML="";
     const resultado = renderizarPalabra(palabras)
    contenedorPalabra.appendChild(resultado);
    
}