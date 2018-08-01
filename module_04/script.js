
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

function Cashier (name, productDatabase) {
	this.name = name,
	this.productDatabase = productDatabase,
	this.customerMoney = 0,
	this.getCustomerMoney = value => this.customerMoney = value; 
	this.countTotalPrice = order => {
   let sum = 0;
    for (const key in order) {
    let z = order[key] * this.productDatabase[key]; 
    sum += z; 
    }
    return sum;
  }
	this.countChange = () => {
    if (this.customerMoney < this.countTotalPrice(order)) {return null};
    return this.customerMoney - this.countTotalPrice(order);
  }
	this.onSuccess = change => console.log('Спасибо за покупку, ваша сдача ' + change)
	this.onError = () => console.log('Очень жаль, вам не хватает денег на покупки')
	this.reset = () => this.customerMoney = 0
}



const bobby = new Cashier("Bobby", products);
bobby.getCustomerMoney(400);
console.log(bobby.customerMoney);
const totalPrice = bobby.countTotalPrice(order);
console.log(totalPrice);
const change = bobby.countChange();
console.log(change);

if (change !== null) {
  bobby.onSuccess(change); 
} else {
  bobby.onError(); 
}

bobby.reset();

console.log(bobby.customerMoney);