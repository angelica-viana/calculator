const calcular = document.getElementById('submit');
const somar = document.getElementById('bt-somar');



function calculo () {
    const altura = document.getElementById('width-height').value;
    const comprimento = document.getElementById('length').value;
    const total = document.getElementById('total');
    const totalSugerido = document.getElementById('sugestao-total');
       
        
    if (altura === "" || comprimento === "") {    
        alert('Peencha todos os campos!!!');
    } 

    const result = (Number.parseFloat(altura) * Number.parseFloat(comprimento));
    const sugestao = Number.parseFloat(result + ((result/100) * 7)); 

    total.textContent = `${result.toFixed(2)} m²`;
    totalSugerido.textContent = `${sugestao.toFixed(2)} m²`; 
    
}

calcular.addEventListener('click', calculo);

function somaValues () {
  
    const somaValores = document.getElementById('soma-valores');
    const valoresSugeridos = document.getElementById('valores-sugeridos');



    const resultTotal = total + somaValores;
    const sugestaoTotal = totalSugerido + valoresSugeridos;

    somaValores.textContent = `${resultTotal.toFixed(2)} m²`;
    valoresSugeridos.textContent = `${sugestaoTotal.toFixed(2)} m²`; 

}

somar.addEventListener('click', somaValues);


function clean () {
    document.getElementById('width-height').value = "";
    document.getElementById('length').value = "";
    document.getElementById('total').innerHTML = "";
    document.getElementById('sugestao-total').innerHTML = "";
}


