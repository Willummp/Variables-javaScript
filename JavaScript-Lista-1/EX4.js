const prompt = require('prompt-sync')() 

const a = parseInt(prompt('Digite o primeiro número  '));
const b = parseInt(prompt('Digite o segundo número   '));
const c = parseInt(prompt('Digite o terceiro número  '));

const r1 = Math.pow ((a+b),2);
const s1 = Math.pow ((b+c),2);
const d1 = (r1+s1)/2;

console.log(`SE R = ${r1} e S = ${s1}`)
console.log(`\n\nO RESULTADO "D" É :${d1}`)