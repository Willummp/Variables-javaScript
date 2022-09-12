const prompt = require('prompt-sync')()

const a1 = parseInt(prompt('Digite o coeficiente A '));
const b1 = parseInt(prompt('Digite o coeficiente B '));
const c1 = parseInt(prompt('Digite o coeficiente C '));
const d1 = parseInt(prompt('Digite o coeficiente D '));
const e1 = parseInt(prompt('Digite o coeficiente E '));
const f1 = parseInt(prompt('Digite o coeficiente F '));

const x = ((c1 * e1) - (b1 * f1) / (a1 * e1)-(b1 * d1));
const y = ((a1 * f1)-(c1 * d1) / (a1 * e1)-(b1 * d1));

console.log(`O valor de X e Y (arredondado) são, respectivamente ${Math.round (x)} e ${Math.round (y)}.`);