const minhaString = 'Eu não sou supersticioso, mas sou um pouco ________.      '

// # Exercício 2

// Observe a string abaixo.

// ```jsx
// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// ```

// A partir dela, execute os passos abaixo:

// a) Remova o excesso de espaços no final da string;
const novaString = minhaString.trim()
console.log(novaString)
// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log('Quantidade de caracteres da string: ' + novaString.length)
console.log('Quantidade de caracteres da string: ' + minhaString.length)
// c) Substitua os traços `________` por “sticioso”.
console.log(novaString.replace('________', 'sticioso'))
