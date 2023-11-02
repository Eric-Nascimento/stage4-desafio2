let option

const students = [
    {
        name: "João",
        nota1: 9,
        nota2: 5,
    },
    {
        name: "Lucas",
        nota1: 7,
        nota2: 3,
    },
    {
        name: "Sergio",
        nota1: 9,
        nota2: 7,
    },
]

while(option !=3){
    option = Number(prompt(`Olá usuário! DIgite o número da opção desejada:
    1. Cadastrar um novo aluno e sua média
    2. Mostrar os alunos cadastrados e suas médias 
    3. sair do programa`))

    switch(option){
        case 1:
            const novoALuno ={
                name: prompt(`Digite o nome do novo aluno:`),
                nota1: Number(prompt(`Digite a primeira nota:`)),
                nota2: Number(prompt(`Digite a segunda nota:`)),
            }
            students.push(novoALuno)
            alert(`Aluno ${novoALuno.name} cadastrado com sucesso!`)
            break;
            
        case 2:
            function mediaAluno(nota1,nota2){
                return ((nota1+nota2)/2).toFixed(2)
            }
            
            
            function printMediaAluno(student){
            
                const media = mediaAluno(student.nota1,student.nota2)
            
                if (media >= 7){
                    return`
                    O aluno(a) ${student.name} teve uma média de ${mediaAluno(student.nota1, student.nota2)}\n Parabéns ${student.name}! Você foi aprovado(a) no concurso!`
                }else{
                    return`
                    O aluno(a) ${student.name} teve uma média de ${mediaAluno(student.nota1, student.nota2)}\n Não foi dessa vez ${student.name}! Mas haverão outras oportunidades, continue estudando!`
                }
            }
            
            for (let student of students){
                let mediaMessage = printMediaAluno(student)
                alert(mediaMessage)
            }
            break;
        case 3:
            alert(`Programa encerrado!`)
            break;
        default:
            alert("Opção inválida, tente novamente!")    
    }
}






