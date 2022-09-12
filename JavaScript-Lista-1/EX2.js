const prompt = require('prompt-sync')() //CHAMANDO O PROMPT SYNC PRO ARQUIVO 

const dias = parseInt(prompt('Quantos dias de vida você tem?  '))
 


const ano = (dias/365)
const mes = (dias%365) /30
const dia = (dias%365) % 30

console.log(`Você tem ${ano} anos,${mes} meses e ${dia} dias `)
