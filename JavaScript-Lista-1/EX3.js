const prompt = require('prompt-sync')() 

const seg = parseInt(prompt('Quantos segundos terá o evento ?  '))

const horas = Math.floor(seg/3600)
const minutos = Math.floor((seg%3600)/60)
const seg2 = Math.floor((seg%3600)%60)

console.log(`O evento terá ${horas} horas, ${minutos} minutos e ${seg2} segundos.`)