let h2 = document.querySelector('h2');
let deletebtn = document.querySelector('#wrapper ul');
let button =document.querySelector('.deletebtn');
let button1 =document.querySelector('.deletebtn1');
let button2 =document.querySelector('.deletebtn2');
let button3 =document.querySelector('.deletebtn3');

deletebtn.addEventListener('click', (e)=>{
    if(e.target==button) {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
    if(e.target==button1) {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
    if(e.target==button2) {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
    if(e.target==button3) {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});
