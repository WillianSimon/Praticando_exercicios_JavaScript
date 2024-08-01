function aumentarSalario(pessoa, aumentoPercentual) {
    // Calcula o aumento em valor absoluto
    const aumentoAbsoluto = pessoa.salario * (aumentoPercentual / 100);
    
    // Atualiza o salário usando o operador de atribuição composto
    pessoa.salario += aumentoAbsoluto;
    
    return pessoa;
}

// Exemplo de uso:
const pessoa = {
    nome: "João",
    idade: 30,
    salario: 5000
};

const aumentoPercentual = 10; // Aumento de 10%

const pessoaAtualizada = aumentarSalario(pessoa, aumentoPercentual);
console.log(pessoaAtualizada); // Exibe o objeto pessoa com o salário atualizado
