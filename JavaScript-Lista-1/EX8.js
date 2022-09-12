const prompt = require('prompt-sync')() 

const custo = parseInt(prompt('Qual o custo de produção do carro?  '));
 
const destri = (custo*28)/100;
const imposto = (custo*40)/100;
const valor = custo+destri+imposto;

console.log(`O valor total é ${valor}`);
// A PARTIR DE AQUI EU Q DECIDI FAZER 

const taxa = parseInt(prompt(`\n\nCaso queira ver os detalhes, digite 1 `));

if (taxa ==1){
    console.log(`O imposto é de ${imposto} e a % do destribuidor é de ${destri}`);    
}   else{
    console.log(`Sistema encerrado.`);
}
