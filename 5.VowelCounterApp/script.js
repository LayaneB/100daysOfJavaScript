const btn=document.querySelector('.btn');
const result=document.querySelector('.result');


btn.addEventListener('click', countVowel);

function countVowel(){
    const input=document.querySelector('.inputWord');
    const inValue = input.value.toLowerCase();
    let numVowel = 0;
    console.log(inValue);
    let len= inValue.length;
    for(let i=0;i<len;i++){
        if(inValue[i]=='a'|| inValue[i]=='e'|| inValue[i]=='i' || inValue[i]=='o' || inValue[i]=='u'){
            numVowel++;
        }
        if(inValue[i]=='á'|| inValue[i]=='é'|| inValue[i]=='í' || inValue[i]=='ó' || inValue[i]=='ú'){
            numVowel++;
        }
        if(inValue[i]=='â'|| inValue[i]=='ê'|| inValue[i]=='ã' || inValue[i]=='õ' || inValue[i]=='ô'){
            numVowel++;
        }
    }

    return result.innerHTML = `The number of vowels in the word ${inValue} is ${numVowel}`;
}


// ohter way to do this:
// for(let i=0;i<len;i++){
//     let letter=inValue[i]; 
//     if(letter.match(/([a,e,i,o,u]))){
//         numVowel++
//     }
// }
// return result.innerHTML = `The number of vowels in the word ${inValue} is ${numVowel}`;