/*
-> Peça ao usuário para digitar um número binário e o converta para decimal.
*/

const numBinario = prompt("Digite um numero binário: ")

const decimal = numBinario.split('').reverse().map(x => parseInt(x)).map((numBinario, index) => {
    if (numBinario == 1) {
        return 2 ** index
    } 
    return 0
})
.reduce((x, y) => x + y)

alert(`${numBinario} para ${decimal}`)


// const decimal = parseInt(numBinario, 2)