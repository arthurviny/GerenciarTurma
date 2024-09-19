// Atividade em Trio: Gerenciamento de Turma -> Arthur Vinícius, Ithalo Vinícius, Davi Machado

// Registro Aluno Genérico

const aluno = (Nome, Idade, Matricula, Curso) => ({ 
    Nome:'',
    Idade:0,
    Matricula:0,
    Curso:'',
})

const turma = Object.freeze([]) // Lista turma "contendo" os alunos

//Função para criar um novo aluno e Adicionar o mesmo à turma

const CriarAluno = (Nome, Idade, Matricula, Curso) => (lista) => {
    const novato = {
    ...aluno,
    Nome: Nome, Idade: Idade, Matricula: Matricula, Curso: Curso
    }
    return ([...lista, novato])
}
const Turma1 = Object.freeze(CriarAluno('Ithalo', 19, 202300017555, 'EC')(turma))
const Turma2 = Object.freeze(CriarAluno('Arthur', 18, 202400017586, 'CC')(Turma1))
const Turma3 = Object.freeze(CriarAluno('Davi', 20, 202200017588, 'SI')(Turma2))
console.log(Turma3)

//Função para listagem dos Alunos
const listaralunos = (lista) => lista.map((aluno)=>  `Nome: ${aluno.Nome}, Idade: ${aluno.Idade}, Matrícula: ${aluno.Matricula}, Curso: ${aluno.Curso}`) 
console.log(listaralunos(Turma3))

// Função para Filtragem por curso
const filtrarporcurso = (lista, Curso) => lista.filter((aluno) => aluno.Curso == Curso)
console.log(filtrarporcurso(Turma3,'SI'))

//Função para Remoção de um Aluno específico (baseado no nome)

const removeraluno = (lista) => (Nome) => lista.filter((item) => item.Nome !== Nome)
console.log(removeraluno(Turma3)('Arthur'))

//Função para ordenar a Turma conforme os números de matrícula (mais antigo ao mais recente.)

const ordenarTurma = (turma) => {
    return [...turma].sort((a,b)=> a.Matricula - b.Matricula)
}
console.log(ordenarTurma(Turma3))

//Função para Contagem de Cada Curso

const alunosCurso = (turma) => {
    return turma.reduce((acc, aluno) => {   //dá reduce na turma em busca dos cursos 
        acc[aluno.Curso] = (acc[aluno.Curso] || 0) + 1
        // os colchetes dão "nome" ao acc, e verifica se o acumulador já tem um valor, se não tiver, usa o 0 como início.
        return acc
    }, {})
}
console.log(alunosCurso(Turma3))

//Função para Edição dos Alunos

const editarAluno = (turma, Matricula, novosDetal) => {
    const novaTurma = turma.map(aluno =>  //dá um map na turma em busca dos alunos
        aluno.Matricula === Matricula //verifica se o aluno é o fornecido pela matricula
            ?{...aluno, ...novosDetal} //se for, ele copia o aluno e junta com os detalhes fornecidos
            : aluno //se não for, ele só retorna o aluno sem alterar nada
    )
    return novaTurma
}
const TurmaEditada = Object.freeze(editarAluno(Turma3, 202200017588, {Nome: 'Davi', Idade: 31, Matricula: 202200015648, Curso: 'EC'}))
console.log(TurmaEditada)








