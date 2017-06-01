var botao = document.querySelector("#buscar-pacientes");

botao.addEventListener('click', function(){
    console.log('Buscando o paciente...');

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
            if(xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            console.log(pacientes);

            pacientes.forEach(function(paciente){
                exibirPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
        }

    });

    xhr.send();
});