/* 

                                    Arrays

Arrays são conjuntos (ou listas) que armazenam várias informações. Os procedimentos de uso de índices são
idênticos ao de strings e outras sequências de informação.


*/

var ourArray = ['John',23]; // Exemplo de array que guarda uma string e um integer

var myArray = ['Mateus',1];

console.log(ourArray[0]); // Acessando o primeiro elemento do array ourArray (John)

// Gerando arrays dentro de arrays (arrays multidimensionais)

ourArray = [['the universe',42],['everything',101010]];
myArray = [['Bulls',23],['White Sox',45]];

console.log(myArray[0[0]]);

// Modificando elementos de um array unidimensional

var ourArray = [18,49,65];
ourArray[1] = 27
console.log(ourArray)

// Modificando elementos de um array multidimensional

var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
console.log(myArray[0][1]); //Acessando o segundo elemento do primeiro array dentro do conjunto de arrays
console.log([3][0][1]);

// Colocando elementos no Array com a função push

var ourArray = ['Mateus','Galdino','Cardoso'];
ourArray.push(['happy','joy']);
console.log(ourArray)

// Removendo elementos do Array com a função pop (remove o último elemento)

var myArray = [['John',23],['Peter',43]];
var removedMyArray = myArray.pop();
console.log(removedMyArray);// Mostrará o que foi excluído
console.log(myArray); // Mostrará o que sobrou

// Removendo elementos do Array com a função shift (remove o primeiro elemento)

var myArray = [['John',23],['Peter',43]];
var removedMyArray = myArray.shift();
console.log(removedMyArray); // Mostrará o que foi excluído
console.log(myArray); // Mostrará o que sobrou

// Manipulando elementos do Array com a função unshift (adiciona um elemento ao começo do Array)

var myArray = [['John',23],['Peter',43]];
var removedMyArray = myArray.shift();
var unshiftMyArray = myArray.unshift(['Paul',35]);
console.log(removedMyArray); // Mostrará o que foi excluído
console.log(unshiftMyArray);
console.log(myArray); // Mostrará o que sobrou

// Exemplo : lista de compras

var myList = [['cereal',3],['milk',2],['bananas',3],['juice',2],['eggs',12]];
var qtdLeite = myList[1][1]
console.log(qtdLeite)