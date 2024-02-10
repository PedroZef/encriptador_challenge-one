const btnCriptografar = document.querySelector('.btn-cript');
const btnDescriptografar = document.querySelector('.btn-descript');
const btnCopiar = document.querySelector('.btn-copiar');
const primeiroTexto = document.querySelector('.primeiro-texto');
const textoResult = document.querySelector('.txt-result');

btnCriptografar.addEventListener('click', () => {
    // Verifica se há texto antes de criptografar
    if (primeiroTexto.value !== '') {
        criptografar();
        mostraResultado();
    }
});

btnDescriptografar.addEventListener('click', () => {
    descriptografar();
});

btnCopiar.addEventListener('click', () => {
    copy();
});

primeiroTexto.addEventListener('input', () => {
    // Converte o texto para minúsculas
    primeiroTexto.value = primeiroTexto.value.toLowerCase();

    // Esconde o resultado se o campo de texto estiver vazio
    if (!primeiroTexto.value) {
        esconderResultado();
    }
});

// Função para criptografar o texto inserido
const criptografar = () => {
    textoResult.textContent = substituirTexto(primeiroTexto.value, [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]);
};

// Função para descriptografar o texto inserido
const descriptografar = () => {
    textoResult.textContent = substituirTexto(textoResult.value, [['ufat', 'u'], ['ober', 'o'], ['ai', 'a'], ['imes', 'i'], ['enter', 'e']]);
};

// Função para mostrar o resultado
const mostraResultado = () => {
    const containerImg = document.querySelector('.container-resultado');
    const containerResult = document.querySelector('.container-result-cript');
    containerImg.style.display = 'none';
    containerResult.style.display = 'flex';
};

// Função para esconder o resultado
const esconderResultado = () => {
    const containerImg = document.querySelector('.container-resultado');
    const containerResult = document.querySelector('.container-result-cript');
    containerImg.style.display = 'flex';
    containerResult.style.display = 'none';
};

// Função para copiar o texto resultante para a área de transferência
const copy = () => {
    textoResult.select();
    document.execCommand('copy');
    alert(`Copiado com sucesso !!!\n"${textoResult.textContent}"`);
};

// Função para substituir texto com base em uma lista de substituições
const substituirTexto = (original, substituicoes) => {
    for (const [padrao, substituto] of substituicoes) {
        original = original.replace(new RegExp(padrao, 'g'), substituto);
    }
    return original;
};
