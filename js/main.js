//FUNÇÕES DO FORMULARIO

function limpar() {
    document.getElementsByClassName('limpar').value = "";
}

function voltar() {

    setTimeout(function () { window.location.href = "index.html"; }, 2000);

}

// esta função faz com que quando a pagina for rolada apareça o botão
onscroll = function(){
    scroll()
}
// esta função scroll faz com que o botao apareça e  desapareça
function scroll (){
    let btn = document.getElementById("btnTop")
    if(document.documentElement.scrollTop > 50){
        btn.style.display = "block"    
    }
    else{
        btn.style.display = "none"
    }
}
//esta função faz que a pagina volte ao topo ela deve ser chamada no evento onclick do botao
function voltaTop(){
    document.documentElement.scrollTop = 0;
}




























