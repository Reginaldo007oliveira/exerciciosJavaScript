//Função Reverse a string

let newStr = '';

function reverseAstring(str){
    for (let i = str.length -1; i >= 0; i--){
        newStr += str[i];
      
    } 
    
    console.log(newStr); // se eu passar o console para linha de baixo.. não passa pelo for
} 

let resultado = reverseAstring('Reginaldo')