const nomeAluno = "Ricardo"

const nota1 = 10
const nota2 = 5
const nota3 = 7

const mediaFinal = (nota1 + nota2 + nota3) / 3

if (mediaFinal >= 7) {
    console.log (`O aluno: ${nomeAluno}. Foi aprovado com média final de: ${
    mediaFinal}`);
} else if (mediaFinal <=4) {
    console.log (`O aluno: ${nomeAluno}. Foi reprovado com média final de: ${
    mediaFinal}`);
} else {
    console.log (`O aluno: ${nomeAluno}. Está de recuperação com média final de: ${
    mediaFinal}`);
}