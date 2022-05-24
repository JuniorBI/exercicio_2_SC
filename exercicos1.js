/* -> Crie um programa que pergunta quantos números o usuário deseja digitar (tanto inteiro quanto decimal)
 e receba os números e armazene esses números em um array e depois mostre a soma total deles,
 a média deles, mostre cada valor em uma potência de 2 e faça a raíz quadrada e cúbica de cada um.*/

 const qtdNumero = parseFloat(prompt("Quantos numeros deseja digitar?"))

 let numero = [];
 let soma = 0;
 let media = 0;

    for (let i = 0; i < qtdNumero; i++){
    let a = parseFloat(prompt(`Digite a ${i+1}º numero`))
    numero.push(a)
}

    for(total of numero){
    soma += total
}

media = soma / numero.length
let p = numero.map(x => x**2)

let r2 = numero.map(y => Math.sqrt(y))

let r3 = numero.map(z => Math.cbrt(z))            /* x**(1 / 3)*/

document.write(`A soma dos valores é: ${soma} <br>
 A média é: ${media} <br> 
 Multiplicados: ${p}<br> 
 A raiz quadrada: ${r2}<br> 
 A raiz cubica: ${r3}.`)