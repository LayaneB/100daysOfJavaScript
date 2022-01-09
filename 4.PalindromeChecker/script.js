const btn=document.querySelector('.btn');
const result=document.querySelector('.result');


btn.addEventListener('click', palindrome);

function palindrome(){
    const input=document.querySelector('.inputWord');
    const word=input.value.toLowerCase();
    const wordInv = word.split('').reverse().join('');
    console.log(word + wordInv)
    if(wordInv == word){
        result.innerHTML = `The word ${word.toUpperCase()} is a palindrome`
    } else {
        result.innerHTML = `The word ${word.toUpperCase()} is NOT a palindrome`
    }

}