// # Exercício 1

// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas.
const usuarioNome = prompt('Qual é seu nome?')
const usuarioComida1 = prompt('Qual é sua comida favorita?')
const usuarioComida2 = prompt('Qual é sua segunda comida favorita?')
const usuarioComida3 = prompt('Qual é sua terceira comida favorita?')
//Em seguida, Imprima no console a seguinte mensagem:

//     ```
//     Estas são as comidas favoritas de nomeDoUsuario
//     - Comida1
//     - Comida2
//     - Comida3
//     ```
console.log(
  'Estas são as comidas favoritas de ' +
    usuarioNome +
    '\n- ' +
    usuarioComida1 +
    '\n- ' +
    usuarioComida2 +
    '\n- ' +
    usuarioComida3
)

// Você deve usar apenas um `console.log()` para isso

//   <details>
//   <summary> 💡 Dica</summary>

//     ⭐ Você pode juntar texto com variáveis de duas formas:
//     - Concatenando as strings (com o sinal de +)
//     - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)

//     Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.

//   </details>
