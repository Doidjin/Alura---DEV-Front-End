var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

    if(event.target.tagName == 'TD'){

        alvo = event.target;
        paiDoAlvo = alvo.parentNode;    //TR = paciente = remover

        paiDoAlvo.classList.add('fadeOut');

        setTimeout(function(){
            paiDoAlvo.remove();
        },800);
    
    }

    
});
