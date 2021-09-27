const btnCall = document.querySelector(".btnMo");
const menuMo = document.querySelector(".Mob");
const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
const text = document.querySelector(".inner #txt");
const deg = -45;
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
});

next.addEventListener("click", ()=>{
    num--;
    frame.style.transform = `rotate(${num * deg}deg)`;

    if(active == 7){
        active = 0;
    }else{
        active++;
    }

    activation(active, lists);
});

function activation(index, lists){
    for(let el of lists){
        el.classList.remove("on");
    }

    lists[index].classList.add("on");
}



function openWrap1(){
    $top.animate({width : "100%"}, speed, function(){
        $right.animate({height : "100%"}, speed, function(){
            $bottom.animate({width : "100%"}, speed, function(){
                $left.animate({height : "100%"}, speed, function(){
                    $content.fadeIn(speed/2, function(){
                        $close1.animate({right : 30, opacity : 1}, speed);
                        isDone = true;
                    })
                });
            });
        });
    });  
}