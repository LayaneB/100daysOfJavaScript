const number=document.querySelector('.number');
const btn=document.querySelector('.button');
const type=document.querySelector('select')

btn.addEventListener('click', ()=>{
    if (type.value == 1) {
        numberGenerator ();
    } else {
        hexColorGenerator();
    }
})

const numberGenerator = () =>{
    number.innerHTML= Math.floor(Math.random()*10000);
}

const hexColorGenerator = () =>{
    let random = Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = `#${random}`
    number.innerHTML = `#${random}`;
    number.style.color="orangered";
}
