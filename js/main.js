const ulquares = document.querySelector("div.squares");

const imgDir = 3;
let vezes = 6;
let loop = 0;

for (let i = 0 ; i < vezes; i++){

    const div = document.createElement("div");

    div.setAttribute("class",'divImg');
    div.setAttribute("id", 'img'+1);

    const random = (min, max) => Math.random() * (max - min) + min;
    const size = Math.floor(random(1,122));
    const delay = random(5, 0.1);
    const duration = random(24,12);
    
    const position =random(1, 99);

    
    div.style.width = `${size}rem`;
    div.style.height = `${size}rem`;
    div.style.bottom = `-${size}rem`;

    div.style.left = `${positionY}%`;

    div.style.animationDelay = `${delay}s`;
    div.style.animationDuration = `${duracao}s`;
    div.style.animationTimingFunction = `cubic-basier(${Math.random=()},${Math.random=()},${Math.random=()})`;
    
    if(i < imgDir &&loop < vezes){
        ulquares.appendChild(div).innerHTML = '<img src="'+[i]+'.png" alt=""></img>';
    }
    else if (loop < vezes){
        i=1;
        loop++;
    }
}