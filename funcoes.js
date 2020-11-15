/*

                                         Funções

Funções são blocos de código de instruções que aguardam a entrada de dados para executá - lo. Sua estrutura é:

function nomeDaFunção(paramentros){

    instruções

}

*/

function wordBlanks(nome,adjetivo,verbo,adverbio){

    var result = '';
    result = 'O ' + nome + ' ' + adjetivo + ' ' + verbo + ' para o lixo ' + adverbio + '.' ;

    return result;

}

wordBlanks('cachorro','preto','correu','sem parar');


function reusableFunction(){
    console.log('Hello World');
}

reusableFunction()

// Parâmetros e argumentos - são informações necessárias para que a função funcione //


function ourFunctionWithArgs(a,b){
    console.log(a-b);
}

ourFunctionWithArgs(10,5)

// Variáveis sem o parâmetro var são sempre acessíveis em qualquer escopo do arquivo .js // 

var myGlobal = 10;

function fun1(){
    oopsGlobal = 5
}

function fun2(){
    var output = '';
    if(typeof myGlobal != undefined){
        output += 'myGlobal: ' + myGlobal;
    }
    if(typeof oopsGlobal != undefined){
        output += 'oopsGlobal: '+ oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

// Escopos: variáveis declaradas no escopo de uma função só podem ser acessadas pela função //

function myScope () {
    var myVar = 5;
    console.log(myVar);
}

myScope();
console.log(myVar);

// Variáveis em diferentes escopos: as variáveis dentro da função tem prioridade para a função //

var outWear = 'T-Shirt';

function myOutfit(){
    var outWear = 'sweater';
    return outWear;
}

console.log(myOutfit()); // Mostrará sweater

console.log(outWear); // Mostrará T - Shirt

// Funções com matemática //

function menosSete (num) {
    return num - 7;
}

console.log(menosSete(10));

function vezesCinco (num) {
    return num * 5;
}

console.log(vezesCinco(4));

// Funções com arrays - inserindo um novo elemento no fim e retirando o primeiro elemento ao mesmo tempo//

function nextInLine (arr,item){
    arr.push(item);
    return arr.shift();
}

var testArray = [1,2,3,4,5]

console.log('Before: ' + JSON.stringify(testArray));
console.log(nextInLine(testArray,6));
console.log('After: ' + JSON.stringify(testArray));

// Valores booleanos //

function welcomeToBooleans () {
    return false;
    return true;
}

// Estruturas if else //

function isItTrue (variavel) {
    if (variavel === true) {
        return 'Yes, it is true'
    } else {
        return 'No, it is false'
    }
}

function verdadeiroOuFalso (eraVerdadeiro) {
    if (eraVerdadeiro === true){
        return 'Yes, that was true';
    } else {
        return 'No, that was false';
    }
}

console.log(verdadeiroOuFalso(true))

// Comparando variáveis a valores //

function func3 (num) {
    if (num === 12){
        return 'O número é igual a 12';
    } else {
        return 'O número não é igual a 12';
    }
}

console.log(func3(14))

// Operador == (truthy/falsy) e operador === (true/false) //

function compararLeve(a,b){
    if (a == b){
        return 'Verdadeiro';
    } else {
        return 'Falso';
    }
}

function compararForte(a,b){
    if (a === b){
        return 'Verdadeiro';
    } else {
        return 'Falso';
    }
}

console.log(compararLeve(10,'10'));
console.log(compararForte(10,'10'));

// Operador de não - igualidade (!=) // 

function diferente (num) {
    if (num != 10){
        return ' O número inserido é diferente de 10';
    } else {
        return ' O número inserido é igual a 10';
    }
}

console.log(diferente(40))

// Operadores de desigualdade (> (maior que), < (menor que), >= (maior ou igual que), <= (menor ou igual que)) //

function verificar (num) {
    if (num >= 23) {
        return 'O número é maior ou igual a 23';
    } else if (num <=12) {
        return 'O número é menor ou igual a 12';
    } else {
        return 'O número está entre 13 e 22';
    }
}

console.log(verificar(15))

// Operadores and (&&) e or (|) //

function orAnd (num) {
    if (num > 10 | num < 50){
        return 'O número é maior do que 10 ou menor que 50';
    } else if (num <= 5 && num <0){
        return 'O número é menor do que cinco e é negativo';
    }

}

console.log(orAnd(-4))

// Prática - pontuações e nomes no golfe // 

var names = ['Hole - in - one!','Eagle','Birdie','Par','Bogey','Double Bogey','Go Home'];

function golfScore (par,strokes) {
    if(strokes == 1) {
        return names [0];
    } else if (strokes <= par - 2) {
        return names [1];
    } else if (strokes <= par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes == par + 3) {
        return names[6];
    }
}

console.log(golfScore(5,4))

// Expressões Switch - boas alternativas para chaves if/else //

function caseInSwitch (val) {
    var answer = '';
    switch(val){
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gama';
            break;
        case 4:
            answer = 'delta';
            break;
            }
    return answer
}

console.log(caseInSwitch(3))

// Parâmetro default de expressões Switch //

function switchOfStuff (val) {
    var answer = '';
    switch (val){
        case 1:
            answer = 'dog';
            break;
        case 2:
            answer = 'cat';
            break;
        case 3:
            answer = 'fish';
            break;
        default:
            answer = 'stuff';
            break;
    }
    return answer
}

console.log(switchOfStuff(4)) // Mostrará stuff como resposta

// Mesma respostas para múltiplos casos //

function sequentialSizes (val) {
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = 'Low';
            break;
        case 4:
        case 5:
        case 6:
            answer = 'Medium';
            break;
        case 7:
        case 8:
        case 9:
            answer = 'High';
            break;  
    }

    return answer;
}

console.log(sequentialSizes(4));
console.log(sequentialSizes(5));
console.log(sequentialSizes(8));

// Exemplo: Jogo de cartas //

var count = 0;

function cc(carta){
    switch (carta){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count --;
            break;
    }

    var holdbet = 'hold'

    if (count > 0) {
        holdbet == 'bet'
    }

    return count + ': ' + holdbet ;

}

cc(2);cc('K');cc(10);cc('K');cc('A');

// Função parseInt - convertendo valores para números inteiros

function convertToString(str){

    return parseInt(str)

};

convertToString('56')

// Convertendo para outros tipos de contagem

function binarioParaInteger(bin){

    return parseInt(bin,2);

};

console.log(binarioParaInteger('100011'))

// Operador Condicional (Ternário) - um if/else curto

function comparar(a,b){
    return a === b ? true : false;
};

console.log(comparar(3,3));

// Operadores ternários múltiplos

function checkSign (num){
    return num > 0 ? 'positivo': num < 0 ? 'negativo' : 'zero'
};

console.log(checkSign(4));

/*

                                Diferenças de escopo de var e let

As variáveis declaradas com var estão acessíveis para todos os escopos do projeto, enquanto as variáveis
definidas com let estão acessíveis apenas para o escopo em que foram criadas.

*/




