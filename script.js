const boton = document.getElementById("check-btn");

const handle = (e) => {
    e.preventDefault();
    const input = document.getElementById("text-input").value;
    const palabras = logicaPalindromo(input);
    convertir(palabras);
};

boton.addEventListener("click", handle);

const logicaPalindromo = (input) => {
    if (!input) {
        alert("Please input a value"); 
        return
        } 

    let arrayPalabras = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split(" ");

    if (arrayPalabras.length === 1) {
        arrayPalabras = arrayPalabras[0].split(""); 
    } else if (arrayPalabras.length > 1) { 
        arrayPalabras = arrayPalabras.join("").split("");
    }

    let palabraAlreves = "";
    for (let i = arrayPalabras.length - 1; i >= 0; i--) {
        palabraAlreves = palabraAlreves + arrayPalabras[i];
    }

    const palabrasUnidas = arrayPalabras.join("");

    if (palabraAlreves === palabrasUnidas) {
        return `${input} is a palindrome.`;
    } else {
        return `${input} is not a palindrome.`;
    }
};

const renderizarPalabra = (palabras, esPalindromo) => {
    const palabra = document.createElement("p");
    palabra.innerHTML = palabras;
    
    // Agregar clase dependiendo del resultado
    if (esPalindromo) {
        palabra.classList.add("result-palindrome");
    } else {
        palabra.classList.add("result-not-palindrome");
    }

    return palabra;
};

const convertir = (palabras) => {
    const contenedorPalabra = document.getElementById("result");
    contenedorPalabra.innerHTML = "";
    
    const esPalindromo = palabras.includes("is a palindrome");
    const resultado = renderizarPalabra(palabras, esPalindromo);
    contenedorPalabra.appendChild(resultado);
};
