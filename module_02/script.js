
let input;
let p =0;
const arr = [];
do {
  input = prompt('Введите массив чисел:');
  if(!Number.isNaN(Number(input)))
   {
  arr.push(input);
	}
	else {alert('Введите ИМЕННО число');}
} while (input !== null); 
arr.pop();
console.log(arr); 
for ( const item of arr) {
p = p + Number(item);
}
alert('сумма всех значений в массиве: ' + p); 