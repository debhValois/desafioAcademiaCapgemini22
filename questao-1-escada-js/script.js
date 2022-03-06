// Olá Mundo Lindo!!!
//Desafio Capgemnini | Questão 1 | A Escada | Debh Valois | 05/03/2022

// Linkando Páginas entre JS e HTML
const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');

// Menu de navegação entre as páginas 1, 2 e 3
function go(currentStep, nextStep) {
    let dNone, dBlock;
    if (currentStep == 1) {
        dNone = firstDiv;
    }
    else if (currentStep == 2) {
        dNone = secondDiv;
    }
    else {
        dNone = finalDiv;
    }
    dNone.style.display = 'none';
    if (nextStep == 1) {
        dBlock = firstDiv;
    }
    else if (nextStep == 2) {
        dBlock = secondDiv;
    }
    else {
        dBlock = finalDiv;
    }
    dBlock.style.display = 'block';
}

// *** Algoritmo de cálculo da array ***
function validate() {

    // Recebendo dados do input
    let c = document.getElementById('degrau').value;
    function escada(c) {
        let lista = [];
        for (let i = 1; i <= c; i++) {
            let espaco = c - i;
            lista.push(" ".repeat(espaco) + "*".repeat(i));
        }
        return lista.join('\n');
    }

    // Inspecionar meus Testes
    console.log(escada(c));

    // Imprima a escada na minha page
    let mostre = document.getElementById("resultado");
    mostre.style.color = 'yellow';
    mostre.innerText = (escada(c));

    // Retorne ao menu de navegação
    go(2, 3);
}