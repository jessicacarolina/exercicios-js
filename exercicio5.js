vet5 = () => {
    let posicao, logica = [], linguagemProgramacao = [], i, interseccao = [];
    for(i = 0; i < 10; i++) {
        logica.push(Number(prompt("Informe o codigo do aluno matriculado no curso de Lógica:")))
    }
    for(i = 0; i < 5; i++){
        linguagemProgramacao.push(prompt("Informe o código do aluno matriculado no curso de Linguagem de Programação:"))
    }
    for(i = 0; i < 10; i++) {
        posicao = linguagemProgramacao.indexOf(logica[i])
        if (posicao != -1) {
            interseccao.push(logica[i])
        }
    }
    alert("Codigo dos alunos que estão matriculados nos dois cursos" + interseccao)
}
