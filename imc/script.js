
let caucular = document.getElementById('caucular')

function imc() {
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let resultado = document.getElementById('resultado')
    
    if (nome !== '' && altura !== '' && peso !== ''){
        
        const valorIMC = (peso / (altura * altura)).toFixed(1)
        // resultado.textContent = "Seu IMC é:" +  valorIMC

        let classificacao = ''

        if(valorIMC < 18.5){
            classificacao = 'Abaixo do Peso'
        }else if(valorIMC < 24.9){
            classificacao = 'Com o Peso Normal'
        }else if(valorIMC <29.9 ){
            classificacao = 'Sobrepeso'
        }else if(valorIMC < 34.9 ){
            classificacao = 'Com Obesidade Grau I'
        }else if(valorIMC < 39.9 ){
            classificacao = 'Com Obesidade Grau II'
        }else  {
            classificacao = 'Com Obesidade Morbida'
        }

        // resultado.textContent = nome +" seu IMC é " + valorIMC + " e você está "+ classificacao  
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else{
        resultado.textContent = 'Preencha todos os campos'
    }
}



 caucular.addEventListener('click', imc)