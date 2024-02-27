
const limit = 5;
let counter = 0;

// il ciclo è attivo fino a che la condizione è vera
while(counter < limit){
  console.log(counter);

  // creo la situazione per rendere a un certo punto la condizione del ciclo falsa
  // AATTENZIONE!! Se non creo questa situazione creo un loop infinito
  counter++;

}

const colori = ['giallo', 'verde', 'rosso', 'blu'];
let i = 0;
while(i < colori.length){
  console.log(colori[i]);

  i++;
}

let c = 0;

// con do/while il primo ciclo parte sempre e il controllo avviene dopo
do{
  console.log(colori[c]);

  c++
}while(c < colori.length)