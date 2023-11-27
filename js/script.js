const sumbmitBut = document.querySelector("#submit");
const caja1 = document.querySelector("#ABut"); 
const caja2 = document.querySelector("#ABut2"); 
const caja3 = document.querySelector("#ABut3"); 
const caja4 = document.querySelector("#ABut4"); 
const caja5 = document.querySelector("#ABut5"); 
const caja6 = document.querySelector("#ABut6"); 

const Dcaja1 = document.querySelector("#QBut"); 
const Dcaja2 = document.querySelector("#QBut2"); 
const Dcaja3 = document.querySelector("#QBut3"); 
const Dcaja4 = document.querySelector("#QBut4"); 
const Dcaja5 = document.querySelector("#QBut5"); 
const Dcaja6 = document.querySelector("#QBut6"); 

const items = [0, 0, 0, 0, 0, 0,];

 arreglo = ["Mauricio", "Alvarado", "Gabriel","?"] 
/*function addItem(item){
 return arreglo.push(item);
} */
function addItem(algo){
return items[algo] ++; 
}
function submit(D1,D2,D3,D4,D5,D6){
  for (D1 ; D1 > 0; D1--){
    arreglo.push("item1");
  }
  for (D2 ; D2 > 0; D2--){
    arreglo.push("item2");
  }
  for (D3 ; D3 > 0; D3--){
    arreglo.push("item3");
  }
  for (D4 ; D4 > 0; D4--){
    arreglo.push("item4");
  }
  for (D5 ; D5 > 0; D5--){
    arreglo.push("item5");
  }
  for (D6 ; D6 > 0; D6--){
    arreglo.push("item6");
  }
  for(let i = 0; i < items.length ; i++){
    items[i] = 0;
    console.log(items);
    console.log(items.length);
  }
  console.log(arreglo);
  return arreglo, items;
}
/* function delItem(){
  return arreglo = [];
} */

function delItem(algo){
  console.log(items)
  if (items[algo] > 0){
    return items[algo]--;
  }
}

/* function submit(){
  console.log(arreglo);
  return arreglo;
} */
caja1.addEventListener("click",(Event)=>addItem(0));
caja2.addEventListener("click",(Event)=>addItem(1));
caja3.addEventListener("click",(Event)=>addItem(2));
caja4.addEventListener("click",(Event)=>addItem(3));
caja5.addEventListener("click",(Event)=>addItem(4));
caja6.addEventListener("click",(Event)=>addItem(5));
Dcaja1.addEventListener("click",(Event)=>delItem(0));
Dcaja2.addEventListener("click",(Event)=>delItem(1));
Dcaja3.addEventListener("click",(Event)=>delItem(2));
Dcaja4.addEventListener("click",(Event)=>delItem(3));
Dcaja5.addEventListener("click",(Event)=>delItem(4));
Dcaja6.addEventListener("click",(Event)=>delItem(5));
sumbmitBut.addEventListener("click", (Event)=>submit(items[0], items[1], items[2], items[3], items[4], items[5]));
