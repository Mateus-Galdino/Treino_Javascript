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

console.log(phoneticLookup('alpha'))