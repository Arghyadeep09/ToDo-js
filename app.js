const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const text=document.getElementById("display-text");

function clickHandler(){
    if(inputBox.value==''){
        text.innerHTML=`Enter a todo before clicking`;
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }

    inputBox.value= "";
}