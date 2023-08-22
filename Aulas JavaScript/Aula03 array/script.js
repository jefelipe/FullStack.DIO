// O que são vetores ou Arrays 

// como declarar um array

// let array = ['string', 1, true];
// console.log(array);

//pode guardar vários tipos de dados

 let array = ['string', 1, true, ['array1'], ['array2']];
// console.log(array[0]);

// // forEach
// array.forEach(function(item, index) {console.log(item, index)});

/* array.push('novo item');
console.log(array) */

//  array.pop(); 

//  array.shift(); 

let object = { string: 'string', number: 4, bollean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}};

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

