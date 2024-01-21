// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!")
// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numOne = 2
let numTwo = 3
console.log(numOne + numTwo)

/*
   3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof`
*/ 
let varNumber = 2
console.log(typeof varNumber == 'number'? "É um número": "Não é um número")   
// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let varString = "2"
console.log(typeof varString == 'string'? "É uma string": "Não é uma string")   

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let varBoolean = true
console.log(typeof varBoolean == 'boolean'? "É um booleano": "Não é um booleano")   

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let subOne = 10
let subTwo = 7
console.log(subOne - subTwo)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let multOne = 5
let multTwo = 4
console.log(multOne * multTwo)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let divOne = 5
let divTwo = 4
console.log(divOne / divTwo)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let numPar = 8
console.log((numPar % 2) == 0 ? "É um número par": "Não é um número par")

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let numImpar = 7
console.log((numImpar % 2) != 0 ? "É um número ímpar": "Não é um número ímpar")