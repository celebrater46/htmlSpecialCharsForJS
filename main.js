"use strict";

const chars = ["&", '"', "'", "<", ">"];

// https://www.petitmonte.com/javascript/htmlspecialchars.html
function h(str){
    return (str + '').replace(/&/g,'&amp;')
        .replace(/"/g,'&quot;')
        .replace(/'/g,'&#039;')
        .replace(/</g,'&lt;')
        .replace(/>/g,'&gt;');
}

const ul = document.querySelector("ul");
const lis = document.querySelectorAll("ul#ul li");

let i = 0;
chars.forEach(char => {
    lis[i].innerHTML = h(char);
   // console.log(lis[i].innerText);
   i++;
});