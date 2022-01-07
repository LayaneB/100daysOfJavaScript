// const btnIn=document.getElementById('increase');
// const btnDe=document.getElementById('decrease');
// const btnRt=document.querySelector('#reset');
const buttons=document.querySelector('.button-div')
const count=document.getElementById('count');


buttons.addEventListener('click', (e)=>{
    if(e.target.classList.contains("increase")){
        count.innerText++;
        setColor();
    }
    if(e.target.classList.contains("decrease")){
        count.innerText--;
        setColor();
    }
    if(e.target.classList.contains("reset")){
        count.innerText=0;
        setColor();

    }
})

function setColor(){
    if(count.innerHTML > 0){
        count.style.color="green";
    
    }else if(count.innerHTML < 0){
        count.style.color="orangered";
    } else {
        count.style.color="white";
    }  
}
// btnIn.addEventListener('click', ()=>{
//     count.innerText++;
// });
// btnDe.addEventListener('click', ()=>{
//     count.innerText--
// });
// btnRt.addEventListener('click', ()=>{
//     count.innerText = 0;
// });





