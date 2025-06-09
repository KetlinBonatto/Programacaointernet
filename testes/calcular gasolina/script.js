function calcularLitros() {
    let preco = parseFloat(document.getElementById("preco").value);
    let valor = parseFloat(document.getElementById("valor").value);

    if (preco > 0 && valor > 0) {
      let litros = valor / preco;
      document.getElementById("resultado").innerText = 
        "Você conseguiu colocar " + litros.toFixed(2) + " litros no tanque.";
    } else {
      document.getElementById("resultado").innerText = 
        "Por favor, insira valores válidos.";
    }
  }