const express = require("express");
const functions = require("./functions/functions");

const server = express();

console.log(`Sua idade é: ${functions.idade(2021, 1998)}`);
console.log();
console.log(`Antigo array: ${functions.array().array}`);
console.log();
console.log(`Novo array: ${functions.array().novoArray}`);
console.log();
console.log(`As stacks com notas iguais ou maiores que 9 são: ${functions.notas()}`);
console.log();
const port = 3030;
server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});