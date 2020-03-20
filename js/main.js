
// esta função faz com que quando a pagina for rolada apareça o botão
onscroll = function(){
    scroll()
}
// esta função scroll faz com que o botao apareça e  desapareça
function scroll (){
    onscroll = function(){
        scroll()
    }
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




























