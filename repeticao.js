/*

                                        Estruturas de repetição

Estruturas de repetição auxiliam a automatizar tarefas repetitivas.

*/

// Estrutura while

var myArray = [];

var i = 0;

 while(i<5) {
    myArray.push(i);
    i++;
 }

 console.log(myArray)

 // Estrutura for

 var ourArray = [];

 for (var i = 0; i < 5;i++) { // Tradução: com i iniciando com valor 0, incremente o valor de i em 1 unidade até 4 e coloque os valores no array
     ourArray.push(i)
 }

 console.log(ourArray);

// Gerando um array de números pares

 var myArrayPar = [];

 for (var i = 0;i < 10;i+=2){ // Gerando um array de números pares
     myArrayPar.push(i)
 }

 console.log(myArrayPar);

// Gerando um array de número impares

 var myArrayImpar = [];

 for (var i = 1;i<10;i+=2){
     myArrayImpar.push(i)
 }

 console.log(myArrayImpar);

 // Gerando arrays que contam de trás pra frente

 var arrayInverso = [];

 for (var i = 10;i > 0;i -= 1) {
     arrayInverso.push(i)
 }

 console.log(arrayInverso);


 // Iterando com propriedades de array

 var myArray = [2,3,4,5,6];
 var total = 0;
 for (var i = 0; i < myArray.length; i++){
     total += i 
 };

 console.log(total);

// Iterando arrays multidimensionais

function multiplyAll (arr) {

    var product = 1;

    for (var i = 0; i< arr.length;i++){

        for(var j = 0; j < arr[i].length;j++){

            product *= arr[i][j]

        }

    }

    return product;

};

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

// Do ... While: primeiro implementa uma ação, e DEPOIS entra na instrução While

var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i<5)

console.log(i,myArray);

// Teste 3 - Checando dados

var contacts = [
    {
        'firstName':'Akira',
        'lastName':'Laine',
        'number':'123456678',
        'likes': ['Pizza','Coding','Brownie Points']
    },

    {
        'firstName':'Harry',
        'lastName':'Potter',
        'number': '859302245',
        'likes':['Hogwarts','magic','Hagrid']
    },

    {
        'firstName':'Sherlock',
        'lastName':'Holmes',
        'number':'86940302',
        'likes':['Intriguing cases','Violin']
    },

    {
        'firstName':'Kristian',
        'lastName':'Vos',
        'number':'unknown',
        'likes': ['Javascript','Gaming','Foxes']
    }
];

function lookupProfile(name,prop){
    for(var i = 0;i < contacts.length; i++) {
        if(contacts[i].firstName === name){
            return contacts[i][prop] || 'No such property'    
        } 
    }
};

var data = lookupProfile('Akira','time');

console.log(data);

// Criando frações aleatórias e números inteiros aleatórios

function randomFunction (){
    return Math.random();
};

console.log(randomFunction());

// Gerando um número aleatório

function randomWholeNumber() {
    return Math.floor(Math.random() * 10)
};

console.log(randomWholeNumber())

// Gerando números aleatórios em um dado intervalo

function randomRange(myMin,myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin); //A adição  de myMin garante que os número gerados serão maiores que o mínimo
};

console.log(randomRange(3,10))

