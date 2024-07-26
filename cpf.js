// VALIDA DE CPF 

// Adicionar escutador à página 
document.getElementById("cpfform").addEventListener("submit", function(event){
    event.preventDefault();

    const cpf = document.getElementById("cpf").value;
    const msg = document.getElementById("message")

    if(validarCPF(cpf)){
        msg.textContent = "O CPF é válido";
        msg.style.color = "green"; 
    }else{
        msg.textContent = "O CPF é inválido";
        msg.style.color = "red";
    }
}
);

//  Função de cálculo  de validação do CPF 
function validarCPF(cpf){
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não númericos    

//  Verificar se o valor infromado contem 11 dígitos e se todos são dígitos iguais 

if(cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)){
    return false;
}

    let soma = 0;
    let resto;
    // validação do primeiro dígito verificador
    for(let i = 1; i <= 9; i++){
        soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if((resto == 10) || (resto === 1)){
        resto = 0
        
    }

    if(resto !== parseInt(cpf.substring(9, 10))){
        return false;
    }
    soma = 0

    // Validar 11 dígitos do CPF - 2° dígito verificar 
    for(let i = 1; i <= 10; i++){
        soma += parseInt(cpf.substring(i-1, i)) * (12-i);


    }
    resto = (soma * 10) % 11; 
    if((resto === 10) || (resto === 11)){
        resto = 0;
    }

    if(resto !== parseInt(cpf.substring(10, 11))){
        return false;
    }

    return true;
}