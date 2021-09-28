const btnCall = document.querySelector(".btnMo");
const menuMo = document.querySelector(".Mob");
const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const text = document.querySelector(".inner .txt");
const line = document.querySelector(".col");
const dots = line.querySelectorAll("span");
const col = document.querySelector("span div");
const deg = -72;
const len = lists.length-1;

let i = 0;
let num = 0;
let active = 0;


btnCall.onclick = function(e){
    e.preventDefault();

    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");
}

for(let el of lists){
    el.style.transform = `rotate(${deg * i}deg) translateX(-100vh)`;
    i++;
}

prev.addEventListener("click", ()=>{
    num++;
    frame.style.transform = `rotate(${num * deg}deg)`;

    if(active == 0){
        active = len;
    }else{
        active--;
    }

    activation(active, lists);
    activation2(active, dots);
});

next.addEventListener("click", ()=>{
    num--;
    frame.style.transform = `rotate(${num * deg}deg)`;

    if(active == 4){
        active = 0;
    }else{
        active++;
    }

    activation(active, lists);
    activation2(active, dots);
});

function activation(index, lists){
    for(let el of lists){
        el.classList.remove("on");
    }

    lists[index].classList.add("on");
}

function activation2(index, dots){
    for(let el of dots){
        el.classList.remove("on");
    }

    dots[index].classList.add("on");
}

const $article = $("article");
const $txt = $(".txt");
const $top = $(".line1");
const $right = $(".line2");
const $bottom = $(".line3");
const $left = $(".line4");

let speed = 700;
let isOn = $article.hasClass("on");

if(isOn){
    openWrap1();
}else{
    closeWrap1();
}


function openWrap1(){
    $top.animate({width : "60%"}, speed, function(){
        $right.animate({height : "100%"}, speed, function(){
            $bottom.animate({width : "100%"}, speed, function(){
                $left.animate({height : "65%"}, speed, function(){
                    $txt.animate({opacity : 0.9, left : "-130px"}, speed);
                });
            });
        });
    });  
}

function closeWrap1(){
    $txt.animate({left : 0, opacity : 0}, speed/2, function(){
        $top.animate({width : 0}, speed/2);
        $right.animate({height : 0}, speed/2);
        $bottom.animate({width : 0}, speed/2);
        $left.animate({height : 0}, speed/2);
    });
}
