//Crie a const para a frase aqui

// # Exercício 3

// A partir da frase a seguir, faça o que se pede

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
const frase =
  'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'
console.log(frase)
// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const frase2 = frase.replace('verde', 'rosa').replace('azul', 'laranja')
// frase.replace('azul', 'laranja')
console.log('Frase com as alterações: ' + frase2)
// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
const novaFrase =
  'A nova string inclui "verde" e "laranja"? ' +
  frase2.includes('verde', 'laranja')
console.log(novaFrase)
// **EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
const fraseUpper = 'mas não deixe o gato sair'.toUpperCase()
console.log(
  'Frase maiúscula: ' + frase2.replace('mas não deixe o gato sair', fraseUpper)
)
