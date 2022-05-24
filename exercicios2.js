/*-> Peça ao usuário digitar algum texto no pelo prompt e depois mostre esse texto com todas as 
letras maiúsculas, com todas as letras minúsculas e depois escreva no console letra por letra 
do texto que o usuário digitou. (Utilize o método split para fazer esse último)*/


const frase = prompt('digite a frase: ');
console.log(frase.toLocaleUpperCase())

document.write(`${frase.toLocaleUpperCase()}<br>`)
document.write(`${frase.toLowerCase()}<br>`)
document.write(frase.split(""))

console.log(`${frase.toLocaleUpperCase()}<br>`)
console.log(`${frase.toLowerCase()}<br>`)
console.log(frase.split(""))

