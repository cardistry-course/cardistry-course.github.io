let ul=document.querySelector("ul")
let input=document.querySelector("input");

input.onkeypress=function(event){
    if(event.keyCode===13){
        let li=document.createElement("li");
        let span=document.createElement("span")
        let img=document.createElement("img")
        span.innerHTML=input.value;
        img.setAttribute("src", "img/cheats.svg")
        li.appendChild(img) 
        li.appendChild(span) 
        document.querySelector("ul").appendChild(li);   
        input.value="";     
    }
}

ul.onclick=function(event){
    let target=event.target;
    if(target.tagName==='LI'){
        console.log("work");
        target.classList.toggle("checked");
    }
    else if (target.tagName==='IMG') {
        target.parentElement.remove();

    }

}

document.querySelector(".finish").onclick=function(){
    let li=ul.querySelectorAll("li");
    for(let i=0; i<li.length; i++){
        li[i].classList.add("checked")
    }
}

document.querySelector(".clear").onclick=function(){
    ul.innerHTML="";
}