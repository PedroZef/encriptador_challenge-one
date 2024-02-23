function validaTexto(texto) {
    textoResult.textContent = substituirTexto(primeiroTexto.value, [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
      ]);
    const erros = [];

    if (!texto) {
        erros.push('O campo de texto está vazio.');
    } else if (!regex.test(texto)) {
        erros.push('Apenas letras minúsculas e sem acento.');
    }

    return erros;
}

function mostraErros(erros) {
    const mensagemErro = document.querySelector('.mensagem-erro');

    if (erros.length > 0) {
        mensagemErro.style.display = 'block';
        mensagemErro.textContent = erros.join(' ');
    } else {
        mensagemErro.style.display = 'flex';
    }
}

function criptografia() {
    const texto = document.getElementById('areaTexto').value;
    const erros = validaTexto(texto);

    if (erros.length > 0) {
        mostraErros(erros);
    } else {
        const resultado = document.querySelector('.container-resultado');
        const txtResult = document.querySelector('.container-result-cript .txt-result');
        const btnCopiar = document.querySelector('.container-result-cript .btn-copiar');

        resultado.style.display = 'none';
        const criptografado = texto.split('').map(letra => String.fromCharCode(letra.charCodeAt(0) + 3)).join('');
        txtResult.value = criptografado;
        btnCopiar.onclick = () => {
            navigator.clipboard.writeText(criptografado);
        };
        document.querySelector('.container-result-cript').style.display = 'block';
    }
}

function decript() {
    const texto = document.getElementById('areaTexto').value;
    const erros = validaTexto(texto);

    if (erros.length > 0) {
        mostraErros(erros);
    } else {
        const resultado = document.querySelector('.container-resultado');
        const txtResult = document.querySelector('.container-result-cript .txt-result');
        const btnCopiar = document.querySelector('.container-result-cript .btn-copiar');

        resultado.style.display = 'none';
        const descriptografado = texto.split('').map(letra => String.fromCharCode(letra.charCodeAt(0) - 3)).join('');
        txtResult.value = descriptografado;
        btnCopiar.onclick = () => {
            navigator.clipboard.writeText(descriptografado);
        };
        document.querySelector('.container-result-cript').style.display = 'block';
    }
}