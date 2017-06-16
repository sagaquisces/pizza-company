//business logic

function Pizza () {
	this.size = '';
  this.toppings = [];
  this.totalPrice = 0;
}

Pizza.prototype.getSize = function () {
  return this.size;
}

Pizza.prototype.setSize = function (size) {
  this.size = size;
}

Pizza.prototype.getToppings = function () {
  return this.toppings;
}

Pizza.prototype.calculatePrice = function () {
	return 13.99;
}

Pizza.prototype.addTopping = function (topping){
	this.toppings.push(topping);
}

function Topping (topping,price) {
	this.topping = topping;
  this.price = price;
}



function Ticket (pizzas) {
	this.pizzas = [];
}

// var myPizza = new Pizza(); // create pizza

var cheese = new Topping ("cheese",1.00);

var pepperoni = new Topping ("pepperoni",1.00);

var artichoke = new Topping ("artichoke",1.00);

var anchovies = new Topping ("anchovies", 1.00);

var bacon = new Topping ("bacon", 2.00);

var avocado = new Topping ("avocado", 2.00);

// myPizza.setSize("small");
// myPizza.addTopping(avocado);

// user interface logice

$(document).ready(function() {
  // $("form#pizzaForm #standardPizzaBtn").submit(function(event) {
  //   event.preventDefault();
  //
  // });

  $("#sizeButton").click(function() {
    var myPizza = new Pizza();
    var thisSize = $("input[name='sizeRadio']:checked").val();

 	  alert (thisSize);

  });
});
