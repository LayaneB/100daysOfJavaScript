const number=document.querySelector('.number');
const inputChar=document.querySelector('.inputChar')

inputChar.addEventListener('keyup', ()=>{
    let char = inputChar.value;
    number.innerHTML=char.length;

})

