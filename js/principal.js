// Declarando a variável paciente e selecionando a primeira coluna
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

// Declarando a variável altura e peso e acessando o conteúdo da primeira coluna
var tdAltura = paciente.querySelector(".info-altura");
var tdPeso = paciente.querySelector(".info-peso");

var tdImc = paciente.querySelector(".info-imc");
var altura = tdAltura.textContent;
var peso = tdPeso.textContent;

var alturaEhValida = true;
var pesoEhValido = true;

// Validação do Peso e da Altura
if (peso <= 0 || peso > 200) {
console.log("Peso inválido!");
tdPeso.textContent = "Peso inválido!";
pesoEhValido = false;
}
if (altura <= 0 || altura >= 3) {
console.log("Altura inválida!");
tdAltura.textContent = "Altura inválida!";
alturaEhValida = false;
}
if (alturaEhValida && pesoEhValido) {
var imc = peso / (altura * altura);
tdImc.textContent = imc
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
    }