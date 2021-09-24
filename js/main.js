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

    play.addEventListener("click", e=>{
        // play 버튼부터 .pic을 찾아섯 클래스 on을 추가하여 활성화
        e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
        // play 버튼부터 audio 요소를 찾아서 음악재생
        e.currentTarget.closest("article").querySelector("audio").play();
    });

    pause.addEventListener("click", e=>{
        // pause 버튼부터 .pic을 찾아서 클래스 on을 제거하여 비활성화
        e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
        // pause 버튼부터 audio를 찾아서 재생중지
        e.currentTarget.closest("article").querySelector("audio").pause();
    });

    load.addEventListener("click", e=>{
        // load 버튼부터 pic을 찾아서 on을 추가하여 활성화
        e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
        // load 버튼부터 audio를 찾아서 처음으로 되돌림
        e.currentTarget.closest("article").querySelector("audio").load();
        // play 버튼부터 audio 요소를 찾아서 음악재생
        e.currentTarget.closest("article").querySelector("audio").play();
    });
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