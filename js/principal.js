var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

if (peso < 0 || peso > 200) {
    console.log("peso inválido");
}
if (altura < 0 || peso > 2.10) {
    console.log("altura inválida");
}

var imc = peso / ( altura * altura);
console.log(imc);

var resultado = paciente.querySelector(".info-imc");
resultado.textContent = imc;
