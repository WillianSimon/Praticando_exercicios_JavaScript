function compararNumeros(num1, num2) {
    if (num1 > num2) {
        return "O primeiro número é maior";
    } else if (num2 > num1) {
        return "O segundo número é maior";
    } else {
        return "Os números são iguais";
    }
}

// Solicita que o usuário digite os números
const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));

// Chama a função e exibe o resultado
const resultado = compararNumeros(numero1, numero2);
console.log(resultado);