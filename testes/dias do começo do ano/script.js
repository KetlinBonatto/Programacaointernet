function calcularDias(){
    const dia = parseInt(document.getElementById("dia").value);
    const mes = parseInt(document.getElementById("mes").value);

    if (dia >= 1 && dia <= 30 && mes >= 1 && 1 && mes <= 12) {
        const diasPassados = (mes - 1) * 30 + 30 + dia;

        document.getElementById("Resultado").innerText = 
        'Já se passaram ${diasPassados} dias desde o inicio do ano.'
    }else{
        document.getElementById("Resultado").innerText = 
        "Insira um dia entre 1 e 30 e mês entre 1 e 12."
    }
}