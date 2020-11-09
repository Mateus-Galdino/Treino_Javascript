/* 

                                                Variáveis

Variáveis são importantes em Java, assim como em qualquer linguagem de programação. Há três modos de se declarar
uma variável, que impactará o modo como esta variável se comportará.



*/

var meuNome = 'Mateus'; // Método var permite que a variável seja acessada de qualquer ponto

let meuNumero = 8; // Método let permite que a variável seja acessada somente no escopo local

const pi = 3.14; // Método const determina que o valor da variável é imutável

console.log(meuNome)


// Alterando o valor de variáveis durante o código

var a;
var b = 8;

console.log(b);

a = 10;

b = a;

console.log(b)

// Declarando as variáveis

var a = 8;
var b = 10;
var c = 'I am a '

a = a + 1
b = b + 2
c = c + 'string'

console.log(a)
console.log(b)
console.log(c)

/* 

                                    Tipagem de variáveis - camelCase

O jeito certo de se escrever o nome de uma variávei é através da tipagem camelCase:

                        var NOMEdAvariável (incorreto)
                        var nomeDaVariavel (correto)

*/

// Operadores matemáticos

var sum = 10 + 10;
var sub = 20 - 10;
var multi = 2 * 10;
var divi = 20/10;

var meuNum = 87;
meuNum++;  //Incrementa o valor da variável em uma unidade (é igual a meuNum = meuNum + 1)
meuNum--; //Decrementa o valor da variável em uma unidade (é igual a meuNum = meuNum - 1)

var resto;
resto = 5 % 2; //Sinal de porcentagem mostrará o resto da divisão

a += 12; // O sinal += indica uma soma da variável com o valor ao lado
b += 9;
c += 7; 

a -= 6; // O sinal -= indica uma subtração da variável com o valor ao lado
b -= 9;
c -= 7;

a *= 5; // O sinal *= indica uma multiplicação da variável com o valor ao lado
b *= 8;
c *= 10;

a /= 5; // O sinal /= indica uma multiplicação da variável com o valor ao lado
b /= 8;
c /= 10;

// Trabalhando com palavras entre aspas em strings

var myStr = "I am a \"double quoted\" string inside \"double quotes\"" ; // As barras denotam que a string está entre aspas
console.log(myStr);

var myStr = 'I am a "double quoted" string inside a "double quotes"';
console.log(myStr);

/* 

                                    Atalhos para manipulação de strings


CODE OUTPUT

\' single quote
\" double quote 
\\ backslash
\n newline
\r carriage return
\tab
\backspace
\form feed

*/

var myString = "Primeira Linha\n\t\Segunda Linha\n Terceira Linha";

console.log(myString);

// Concatenando strings com o sinal +

var myStr = "Esse é o começo " + "esse é o fim";
console.log(myStr);

var ourStr = "Esse é o começo";
ourStr += " e esse é o fim."; // Também é possível incrementar frases

console.log(ourStr);

var meuNome = 'Mateus';
var frase = 'Olá, eu sou o ' + meuNome + ' e eu tenho 23 anos'; // Juntando textos com variáveis

console.log(frase);

var meuNome = 'Mateus';
var lengthMeuNome = 0;

lengthMeuNome = meuNome.length; //Descobrindo o comprimento de uma string
console.log(lengthMeuNome);

var meuNome = 'Mateus';
primeiraLetra = meuNome[0]; //Acessando elementos da string pelo seu índice
console.log(primeiraLetra);

/*

                                    Utilizando índices para encontrar elementos

*/


var meuNome = 'Mateus';
primeiraLetra = meuNome[0];
ultimaLetra = meuNome[meuNome.length - 1];

console.log(primeiraLetra);
console.log(ultimaLetra)