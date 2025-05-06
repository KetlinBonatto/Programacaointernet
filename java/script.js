let h1Text = document.querySelector("#h1Text");
let inputText = document.querySelector("#inputText");
let btTrocaText = document.querySelector("#btTrocaText");

function trocarText(){
    //retornando o texto digitado no campo
    let textoDigitado = inputText.value;

    //Convertendo o valor retornado no input em número
    let num = Nuber(imputTexto.value);

    //Alterando o texto do elemento h1
    h1Text.textContent = textoDigitado;
}

btTrocaText.onclick = function(){
    trocarText(); 
}