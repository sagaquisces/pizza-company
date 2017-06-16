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
  if (this.size === "small") {
    this.totalPrice += 10.99;
  } else if (this.size === "medium") {
    this.totalPrice += 13.99;
  } else if (this.size === "large") {
    this.totalPrice += 15.99;
  }
  alert ("this pizza costs " + this.totalPrice)
}

Pizza.prototype.getTotalPrice = function () {
  return this.totalPrice;
}

Pizza.prototype.addTopping = function (topping){
	this.toppings.push(topping);
}

function Topping (topping,price) {
	this.topping = topping;
  this.price = price;
}



function Order (htmlString) {
	this.htmlString = "";
}


Order.prototype.makeMessage = function (message) {
  this.htmlString = message;
}

// var myPizza = new Pizza(); // create pizza

var cheese = new Topping ("cheese",1.00);

var pepperoni = new Topping ("pepperoni",1.00);

var artichoke = new Topping ("artichoke",1.00);

var anchovies = new Topping ("anchovies", 1.00);

var bacon = new Topping ("bacon", 2.00);

var avocado = new Topping ("avocado", 2.00);

var myPizza = new Pizza(); // make this pizza available to all functions

// myPizza.setSize("small");
// myPizza.addTopping(avocado);

// user interface logice

$(document).ready(function() {
  // $("form#pizzaForm #standardPizzaBtn").submit(function(event) {
  //   event.preventDefault();
  //
  // });
  var myPizza = new Pizza(); // make this pizza available to all functions

  $("#sizeButton").click(function() {


    var thisSize = $("input[name='sizeRadio']:checked").val();
    if (!thisSize) {
    } else {
      myPizza.setSize(thisSize);
      myPizza.calculatePrice();
      myString = "Standard " + myPizza.getSize() + " pizza. Boring. Your total comes to: $" + myPizza.getTotalPrice();
      $("#yourOrder").append(myString);
    }

  });
});
