const prompt = require('prompt-sync')() 

const x1 = parseInt (prompt('Insira primeiro ponto X1 (X,Y) '))
const y1 = parseInt (prompt('Insira primeiro ponto Y1 (X,Y) '))
const x2 = parseInt (prompt('Insira SEGUNDO ponto X2 (X,Y) '))
const y2 = parseInt (prompt('Insira SEGUNDO ponto Y2 (X,Y) '))

const d = parseInt(Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2))) 


console.log(`\nA distância entre os pontos é de ${d}`)