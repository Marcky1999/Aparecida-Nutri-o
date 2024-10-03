    var titulo = document.querySelector(".titulo");
    titulo.textContent = "Aparecida Nutricionista"

    var pacientes = document.querySelectorAll(".paciente");
    for (var i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i];

        var tdPeso = paciente.querySelector(".info-peso");
        var peso = tdPeso.textContent;

        var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;

        var tdImc = paciente.querySelector(".info-imc");

        var pesoEhValido = true;
        var alturaEhValida = true;

        if (peso <= 0 || peso >= 300) {
            console.log("Peso inválido!");
            pesoEhValido = false;
            tdImc.textContent = "Peso inválido";
            paciente.style.backgroundColor = "red"
        }
        if (altura <= 0 || altura >= 3.00) {
            console.log("Altura inválida!");
            alturaEhValida = false;
            tdImc.textContent = "Altura inválida";
            paciente.style.backgroundColor = "red"
        }
        if (alturaEhValida && pesoEhValido) {
            var imc = peso / (altura * altura);
            tdImc.textContent = imc.toFixed(2);
            }       
        }

   var botaoAdicionar = document.querySelector("#adicionar-paciente");
   botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault(); 
    
    var form = document.querySelector("#form-adiciona");

    // Coleta os valores do formulário
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // Criação da nova linha e células
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    // Preenche as células com os valores do formulário
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // Adiciona as células à linha
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    // Seleciona a tabela e adiciona a nova linha
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    // Limpa o formulário após adicionar o paciente
    form.reset();
});