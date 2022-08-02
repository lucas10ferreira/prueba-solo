var botonAdicional = document.querySelector("#adicionar-paciente");

botonAdicional.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");

    var tabla = document.querySelector("#tabla-pacientes");

     var nombre = form.nombre.value; 
     var altura = form.altura.value;
     var peso = form.peso.value;
     var gordura = form.gordura.value;

     pacienteTr = document.createElement("tr");
     nombreTd = document.createElement("td");
     alturaTd = document.createElement("td");
     pesoTd = document.createElement("td");
     gorduraTd = document.createElement("td");
     imcTd = document.createElement("td");

     nombreTd.textContent = nombre;
     alturaTd.textContent = altura;
     pesoTd.textContent = peso;
     gorduraTd.textContent = gordura;

     pacienteTr.appendChild(nombreTd);
     pacienteTr.appendChild(pesoTd);
     pacienteTr.appendChild(alturaTd);
     pacienteTr.appendChild(gorduraTd);

     tabla.appendChild(pacienteTr);
});