/*

                                        Objetos

Objetos são variáveis que acumulam muitas informações em uma mesma declaração de variável.

*/

// Exemplo: criando o objeto que descreve o meu cachorro //

var meuCachorro = {
    'name':'Camper',
    'legs': 4,
    'tails': 1,
    'friends':['everything']
};

// Acessando elementos do objeto // 

var meuObjeto = {
    'hat':'ballcap',
    'shirt':'jersey',
    'shoes':'cleats'
};

var hatValue = meuObjeto.hat
var shirtValue = meuObjeto.shirt
var shoesValue = meuObjeto.shoes

// Acessando elementos do objeto com espaços //

var meuPedido = {
    'an entree':'hamburger',
    'my side':'salad',
    'my drink': 'coca'
};

var anEntree = meuPedido['an entree'];
var mySide = meuPedido['my side'];
var myDrink = meuPedido['my drink'];

// Acessando valores através de outras variáveis //

var melhorPersonagemDaDisney = {
    'nome':'Hannah',
    'sobrenome':'Montana',
    'idade':15
};

var playerNome = 'nome'
var player = melhorPersonagemDaDisney[playerNome]

console.log(player);

// Renomeando valores de rótulos do objeto //

var meuCachorro = {
    'name':'Camper',
    'legs': 4,
    'tails': 1,
    'friends':['everything']
};

meuCachorro.name = 'Snoopy';

console.log(meuCachorro)

// Adicionando valores ao objeto // 

var meuCachorro = {
    'name':'Camper',
    'legs': 4,
    'tails': 1,
    'friends':['everything']
};

meuCachorro['latido'] = 'au-au' // Adicionando um novo valor (latido) ao objeto 

console.log(meuCachorro)


// Excluindo valores de um objeto //

var meuCachorro = {
    'name':'Camper',
    'legs': 4,
    'tails': 1,
    'friends':['everything']
};

delete meuCachorro.tails;

console.log(meuCachorro)

// Associando objetos e funções switch //

function phoneticLookup (val) {
    var result = ' ';
    var lookup = {
       'alpha':'Adams',
       'bravo':'Boston',
       'charlie':'Chicago',
       'delta':'Denver',
       'echo':'Easy',
       'foxtrot':'Frank' 
    };

    result = lookup[val];
    return result;
}

console.log(phoneticLookup('alpha'));

// Verificando propriedades de objetos

var myObj =  {
    gift:'pony',
    pet:'kitten',
    bed:'sleigh'
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) { 
        return myObj[checkProp];
    } else {
        return 'Not Found'
    };
}

console.log(checkObj('gift'))

// Acessando elementos de objetos dentro de outros objetos

var myStorage = {
    'car': {
        'inside': {
            'glove box':'maps',
            'passenger seat':'crumbs'
        },
        'outside' : {
            'trunk':'jack'
        }
    }
};

var gloveBoxContents = myStorage.car.inside['glove box']; //Acessando os elementos internos

console.log(gloveBoxContents);

// Aplicação 2 - Gravador de discos

var collection = {
    '2548': {
        'album' : 'Slippery not Wet',
        'artist': 'Bon Jovi',
        'tracks': [
            'Let it Rock',
            'You Give Love a Bad Name'
        ]
    },

    '2468': {
        'album' : '1999',
        'artist':'Prince',
        'tracks': [
            '1999',
            'Little Red Convert'
        ]
    },

    '1245': {
        'artist':'Robert Palmer',
        'tracks': [
        ]
    },

    '5439':{
        'album':'Abba Gold',
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords (id,prop,value){
    if (value === ''){
        delete collection[id][prop];
    } else if (prop === 'tracks'){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] == value;
    }
};

console.log(updateRecords('5439','artist','ABBA'));
console.log(collectionCopy)

// Métodos getters and setters: pegam e definem valores de variáveis em classes

class Book {
    constructor(author) {
        this._author = author;
    };


    get writer() {
        return this._author
    };

    set writer (updatedAuthor) {
        this._author = updatedAuthor
    }
};

function makeClass() {
    class termostato {
        constructor(temp){
            this._temp = 5/9 *(temp-32)
        };

        get temperature(){
            return this._temp;
        };

        set temperature(updatedTemp){
            this._temp = updatedTemp;
        };
    }
    return termostato
};

const termostato1 = makeClass();
const thermos1 = new termostato1(76);
let temp = thermos1.temperature;
thermos1.temperature = 26;
temp = thermos1.temperature