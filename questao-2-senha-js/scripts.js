// Olá Mundo Lindo!!!
//Desafio Capgemnini | Questão 2 | A Senha | Debh Valois | 05/03/2022
class Validator {
  constructor() {
    this.validations = [
      'data-min-length',
      'data-max-length',
      'data-only-letters',
      'data-required',
      'data-password-validate',
    ]
  }
  // Inicia a validação de todos os campos
  validate(form) {
    // Limpa todas as validações antigas
    let currentValidations = document.querySelectorAll('form .error-validation');
    if (currentValidations.length) {
      this.cleanValidations(currentValidations);
    }
    // Pegar todos inputs
    let inputs = form.getElementsByTagName('input');
    // Transformar HTMLCollection em arr
    let inputsArray = [...inputs];
    // Loop nos inputs e validação mediante aos atributos encontrados
    inputsArray.forEach(function (input, obj) {
      // Fazer validação de acordo com o atributo do input
      for (let i = 0; this.validations.length > i; i++) {
        if (input.getAttribute(this.validations[i]) != null) {
          // Limpa string para saber o método
          let method = this.validations[i].replace("data-", "").replace("-", "");
          // Valor do input
          let value = input.getAttribute(this.validations[i])
          // Invoca o método
          this[method](input, value);
        }
      }
    }, this);
  }
  // Método para validar se tem um mínimo de caracteres
  minlength(input, minValue) {
    let inputLength = input.value.length;
    let errorMessage = `A senha precisa ter pelo menos ${minValue} dígitos!`;
    if (inputLength < minValue) {
      this.printMessage(input, errorMessage);
    }
  }
  // Método para validar se passou do máximo de caracteres
  maxlength(input, maxValue) {
    let inputLength = input.value.length;
    let errorMessage = `A senha precisa ter menos que ${maxValue} dígitos!`;
    if (inputLength > maxValue) {
      this.printMessage(input, errorMessage);
    }
  }
  // Método para validar strings que só contem letras
  onlyletters(input) {
    let re = /^[A-Za-z]+$/;;
    let inputValue = input.value;
    let errorMessage = "Este campo não aceita números, espaços, nem caracteres especiais!";
    if (!re.test(inputValue)) {
      this.printMessage(input, errorMessage);
    }
  }
  // Verifica se o campo está vazio
  required(input) {
    let inputValue = input.value;
    if (inputValue === "") {
      let errorMessage = "Este campo é obrigatório";
      this.printMessage(input, errorMessage);
    }
  }
  // Validando o campo de senha
  passwordvalidate(input) {
    // Explodir string em array
    let charArr = input.value.split("");
    let uppercases = 0;
    let numbers = 0;
    for (let i = 0; charArr.length > i; i++) {
      if (charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))) {
        uppercases++;
      } else if (!isNaN(parseInt(charArr[i]))) {
        numbers++;
      }
    }
    if (uppercases === 0 || numbers === 0) {
      let errorMessage = "A senha precisa ter ao menos: 1 maiúscula, 1 número e 1 dos caracteres especiais:  !@#$%^&*()-+";
      this.printMessage(input, errorMessage);
    }
  }
  // Método para imprimir mensagens de erro
  printMessage(input, msg) {
    // Checa os erros presentes no input
    let errorsQty = input.parentNode.querySelector('.error-validation');
    // Imprimir erro só se não tiver erros
    if (errorsQty === null) {
      let template = document.querySelector('.error-validation').cloneNode(true);
      template.textContent = msg;
      let inputParent = input.parentNode;
      template.classList.remove('template');
      inputParent.appendChild(template);
    }
  }
  // remove todas as validações para fazer a checagem novamente
  cleanValidations(validations) {
    validations.forEach(el => el.remove());
  }
}
let form = document.getElementById('register-form');
let submit = document.getElementById('btn-submit');
let validator = new Validator();
// evento de envio do form, que valida os inputs
submit.addEventListener('click', function (e) {
  e.preventDefault();
  validator.validate(form);
});