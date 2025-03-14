const boton = document.getElementById("check-btn")


const handle = (e)=>{
    e.preventDefault()
    console.log("evento");
    const input = document.getElementById("text-input").value
    console.log(input);
    
}
boton.addEventListener("click",handle);




