//Função Reverse a string

let newStr = '';

function reverseAstring(str){
    for (let i = str.length -1; i >= 0; i--){
        newStr += str[i];
        console.log(newStr);
    }
}

let resultado = reverseAstring('Reginaldo')