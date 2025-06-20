
function calcularDesconto(){

    let valorOriginal = document.getElementById("valor").value; 
    let valorDesconto = document.getElementById("desconto").value;

    valorDesconto = (valorOriginal * valorDesconto) / 100;
    valorFinal = valorOriginal - valorDesconto;

    valorFinal = document.getElementById("Resultado").textContent = "Valor Final:" + valorFinal.toFixed(2);
}

