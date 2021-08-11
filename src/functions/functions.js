//Função para calcular a idade.
function idade(anoAtual, anoNascimento) {
    return anoAtual - anoNascimento;
}

//Função para retornar um novo array apenas com números pares.
function array() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let novoArray = array.filter(pares => (pares % 2) == 0);

    return { array, novoArray };
}

//Função para retornar as stacks com notas iguais ou maiores que 9.
function notas() {
    let programador = {
        nome: "Fulano da Silva",
        stacks: [
            {
                nome: "Javascript",
                note: 8
            },
            {
                nome: "Java",
                note: 8
            },

            {
                nome: "Node",
                note: 10
            },
            {
                nome: "SQL",
                note: 9
            }
        ]
    }

    let notas = programador.stacks.filter(note => note.note >= 9).map(nome => nome.nome);

    return notas;
}

module.exports.idade = idade;
module.exports.array = array;
module.exports.notas = notas;