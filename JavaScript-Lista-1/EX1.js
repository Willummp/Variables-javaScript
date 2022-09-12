const prompt = require('prompt-sync')() //CHAMANDO O PROMPT SYNC PRO ARQUIVO 

const ano = parseInt (prompt('Quantos anos você tem?  ')) // PROMPT = ESCREVA + LEIA(VAR)
  //parseInt transforma o que é string em number
const mes = parseInt(prompt('Quantos meses você já viveu?  '))
const dia = parseInt (prompt('E quantos dias você já viveu?  '))

const resul = ((ano * 360) + (mes * 30)+ dia)
console.log(`Você já viveu por ${resul} dias`) // Escreve no console ("Você já viveu por VÁRIAVEL dias")
