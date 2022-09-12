const prompt = require('prompt-sync')() 

const peso1 = 2
const peso2 = 3
const peso3 = 5

const nota1 = parseInt(prompt('Digite a primeira nota  '));
const nota2 = parseInt(prompt('Digite a segunda nota  '));
const nota3 = parseInt(prompt('Digite a terceira nota  '));

const pond = ((nota1*peso1)+(nota2*peso2)+(nota3*peso3))/peso1+peso2+peso3

console.log(`\nA MÉDIA PONDERADA É ${pond}`)