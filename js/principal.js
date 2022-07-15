var botonAdicional = document.querySelector("#adicionar-paciente");

botonAdicional.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Hiciste click en adicionar")
})

var pacientes = document.querySelectorAll(".paciente");


for(var i = 0 ; i < pacientes.length; i++){

    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEsValido = true;
    var alturaEsValida = true;

    if((peso < 0) || (peso > 500)){;
        pesoEsValido = false;
        tdImc.textContent = ("Peso incorrecto");
        paciente.classList.add("paciente-incorrecto");
    }

    if((altura < 0) || (altura > 3.00)){;
        alturaEsValida = false;
        tdImc.textContent = ("altura incorrecta");
        paciente.classList.add("paciente-incorrecto");
    }

    if(pesoEsValido && alturaEsValida){
        var imc = peso/(altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }

}

    
    
    



