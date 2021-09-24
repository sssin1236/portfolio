const btnCall = document.querySelector(".btnMo");
const menuMo = document.querySelector(".Mob");
const frame = document.querySelector("section");
const list = frame.querySelectorAll("article");
const deg = 45;

let i = 0;

btnCall.onclick = function(e){
    e.preventDefault();

    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");
}

for(let el of list){
    el.style.transform = `rotate(${deg * i}deg)`;
}


prev.addEventListener("click", ()=>{
    num++;
    frame.style.transform = `rotate(${num * deg}deg)`;

    if(active == 0){
        active = len; //7
    }else{
        active--;
    }
    activation(active, lists);
});

next.addEventListener("click", ()=>{
    num--;
    frame.style.transform = `rotate(${num * deg}deg)`;
});

function activation(index, lists){
    // 모든 article에서 on 제거하여 비활성화
    for(let el of lists){
        el.classList.remove("on");
    }

    lists[index].classList.add("on");
}