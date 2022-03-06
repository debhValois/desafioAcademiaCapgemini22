// Olá Mundo Lindo!!!
//Desafio Capgemnini | Questão 3 | O Anagrama | Debh Valois | 05/03/2022

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

// *** Algoritmo de cálculo do anagrama ***
function validate() {
    var anagram = []
    var notAnagram = []
    var arrayOrden = []

    // Recebendo dados do input
    let pri = document.getElementById('primeira').value;
    let seg = document.getElementById('segunda').value;

    // Transferindo lets de inputs para um sô array de entrada
    var listString = [pri, seg]

    // Amarrando as transferencias
    arrayOrden = arraySort(listString)
    anagram = filterAnagram(arrayOrden)
    notAnagram = DifferenceBetweenArrays(listString, anagram, notAnagram)

    // Separando a string por letras e reordenando, gerando um array de todas as strings por ordem alfabetica
    function arraySort(arr) {
        let aux = []
        for (let i = 0; i < arr.length; i++) {
            let strings = arr[i].split("").sort()
            let word = strings.join("")
            aux.push(word)
        }
        return (aux)
    }

    // Filtrando o array ordenado por ordem alfabetica e comparando cada elemento e retornando os que possuem igualdade
    function filterAnagram(arr) {
        let aux = []
        let result = []
        arr.filter(function (elemento, i) {
            let indexElemento = 0
            if (arr.indexOf(elemento) !== i) {
                indexElemento = (arr.indexOf(elemento))
                aux.push(listString[indexElemento])
                aux.push(listString[i])
            }
        })
        result = aux.filter(function (elem, pos, self) {
            return self.indexOf(elem) == pos;
        })
        return (result)
    }

    // Comparando o array de anagramas com o array de entrada, a diferença é o array de "não anagramas" e criando um novo array de "não anagramas"
    function DifferenceBetweenArrays(arr1, arr2, result) {
        arr1.filter(function (element) {
            if (arr2.indexOf(element) === -1) {   // se for encontrado um valor nos dois arrays
                result.push(element)
            }
        });
        return (result)
    }

    // Para inspecionar meus Testes
    console.log("São anagramas: " + anagram)
    console.log("Não são anagramas: " + notAnagram)

    // Envie o resultado para a page
    let mostreSim = document.getElementById("sim");
    mostreSim.style.color = 'yellow';
    mostreSim.innerText = (anagram);
    let mostreNao = document.getElementById("nao");
    mostreNao.style.color = 'yellow';
    mostreNao.innerText = (notAnagram);

    //Retorne ao menu de navegação
    go(2, 3);
}