//FUNÇÕES DO FORMULARIO

function limpar() {
    document.getElementsByClassName('limpar').value = "";
}

function voltar() {

    setTimeout(function () { window.location.href = "index.html"; }, 2000);

}

//FUNÇÃO LER MAIS => ABA CURIOSIDADE
function leiaMais(){
    let pontos = document.getElementById("pontos");
    let maisTexto = document.getElementById("mais");
    let btnLeiaMais = document.getElementById("btnLeiaMais");

    if(pontos.style.display ==="none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";  
    }
    else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnLeiaMais.innerHTML="Leia Menos"; 
    }
}





























