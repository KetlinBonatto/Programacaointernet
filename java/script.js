function verificarTriangulo() {
    const x = parseFloat(document.getElementById('ladoX').value);
    const y = parseFloat(document.getElementById('ladoY').value);
    const z = parseFloat(document.getElementById('ladoZ').value);
    const res = document.getElementById('resTriangulo');
  
    if (x < y + z && y < x + z && z < x + y) {
      if (x === y && y === z) res.innerText = "Triângulo Equilátero";
      else if (x === y || y === z || x === z) res.innerText = "Triângulo Isósceles";
      else res.innerText = "Triângulo Escaleno";
    } else {
      res.innerText = "Os lados não formam um triângulo válido.";
    }
}
  
function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = peso / (altura ** 2);
    const res = document.getElementById('resIMC');
  
    let classificacao = "";
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else if (imc < 35) classificacao = "Obesidade grau 1";
    else if (imc < 40) classificacao = "Obesidade grau 2";
    else classificacao = "Obesidade grau 3";
  
    res.innerText = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
}
  
function calcularImposto() {
    const ano = parseInt(document.getElementById('anoVeiculo').value);
    const valor = parseFloat(document.getElementById('valorVeiculo').value);
    const taxa = ano < 1990 ? 0.01 : 0.015;
    const imposto = valor * taxa;
    document.getElementById('resImposto').innerText = `Imposto a pagar: R$ ${imposto.toFixed(2)}`;
}
  
function calcularSalario() {
    const salario = parseFloat(document.getElementById('salario').value);
    const cargo = document.getElementById('cargo').value;
  
    let percentual;
    switch (cargo) {
      case "gerente": percentual = 0.10; break;
      case "engenheiro": percentual = 0.20; break;
      case "tecnico": percentual = 0.30; break;
      default: percentual = 0.40;
    }
  
    const novo = salario * (1 + percentual);
    const aumento = novo - salario;
    document.getElementById('resSalario').innerText =
      `Salário antigo: R$ ${salario.toFixed(2)}\nNovo salário: R$ ${novo.toFixed(2)}\nAumento: R$ ${aumento.toFixed(2)}`;
}
  
function calcularCredito() {
    const saldo = parseFloat(document.getElementById('saldoMedio').value);
    let credito = 0;
  
    if (saldo > 0 && saldo <= 200) credito = 0;
    else if (saldo <= 400) credito = saldo * 0.2;
    else if (saldo <= 600) credito = saldo * 0.3;
    else credito = saldo * 0.4;
  
    document.getElementById('resCredito').innerText =
      `Saldo médio: R$ ${saldo.toFixed(2)}\nCrédito disponível: R$ ${credito.toFixed(2)}`;
}
  
function calcularLanche() {
    const codigo = document.getElementById("codigoLanche").value;
    const quantidade = Number(document.getElementById("quantidadeLanche").value);
    let preco = 0;
  
    const precos = {
      100: 1.2, 101: 1.3, 102: 1.5,
      103: 1.2, 104: 1.3, 105: 1.0
    };
  
    preco = precos[codigo] * quantidade;
  
    document.getElementById("resultadoLanche").textContent = `Total a pagar: R$ ${preco.toFixed(2)}`;
}
  
function calcularVenda() {
    const preco = Number(document.getElementById("precoProduto").value);
    const condicao = document.getElementById("condicaoPagamento").value;
    let total = preco;
  
    if (condicao === "a") total *= 0.9;
    else if (condicao === "b") total *= 0.85;
    else if (condicao === "d") total *= 1.1;
  
    document.getElementById("resultadoVenda").textContent = `Valor final: R$ ${total.toFixed(2)}`;
}
  
function calcularSalarioProfessor() {
    const nivel = document.getElementById("nivelProfessor").value;
    const horas = Number(document.getElementById("horasSemana").value);
    const valores = { 1: 12, 2: 17, 3: 25 };
    const salario = valores[nivel] * horas * 4.5;
  
    document.getElementById("resultadoProfessor").textContent = `Salário mensal: R$ ${salario.toFixed(2)}`;
}