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
  var markup = 0;
  for (i=0; i < this.toppings.length; i++ ) {
    markup = this.toppings[i].price;
    this.totalPrice += markup;
    alert(this.totalPrice);
  }
}

Pizza.prototype.getTotalPrice = function () {
  return this.totalPrice;
}

Pizza.prototype.addTopping = function (topping){
	this.toppings.push(topping);
}

Pizza.prototype.resetToppings = function () {
  this.toppings = [];
}

function Topping (topping,price) {
	this.topping = topping;
  this.price = price;
}

Topping.prototype.getTopping = function () {
  return this.topping;
}



function Order (htmlString) {
	this.htmlString = "";
}


Order.prototype.makeMessage = function (message) {
  this.htmlString = message;
}

// var myPizza = new Pizza(); // create pizza

var allToppings = [];

var cheese = new Topping ("cheese",1.00);
allToppings.push(cheese);

var pepperoni = new Topping ("pepperoni",1.00);
allToppings.push(pepperoni);

var artichoke = new Topping ("artichoke",1.00);
allToppings.push(artichoke);

var anchovies = new Topping ("anchovies", 1.00);
allToppings.push(anchovies);

var bacon = new Topping ("bacon", 2.00);
allToppings.push(bacon);

var avocado = new Topping ("avocado", 2.00);
allToppings.push(avocado);


var myPizza = new Pizza(); // make this pizza available to all functions

// myPizza.setSize("small");
//myPizza.addTopping(avocado);
//myPizza.addTopping(bacon);

// user interface logice

$(document).ready(function() {
  // $("form#pizzaForm #standardPizzaBtn").submit(function(event) {
  //   event.preventDefault();
  //
  // });
  // var myPizza = new Pizza(); // make this pizza available to all functions

  $("#sizeButton").click(function() {


    var thisSize = $("input[name='sizeRadio']:checked").val();
    if (!thisSize) {
      alert ("Gotta pick a size!");
    } else {
      myPizza.setSize(thisSize);
      myPizza.calculatePrice();
      myString = "Standard " + myPizza.getSize() + " pizza. Boring. Your total comes to: $" + myPizza.getTotalPrice();
      $("#yourOrder").append(myString);
      $(this).unbind('click');
      $(this).addClass('disabled');

    }

  });

  $("#toppingsButton").click(function() {

    myPizza.resetToppings(); // just in case customer changes mind
    var thisTopping = "";
    $("input.topping:checked").each(function () {
      thisTopping = $(this).val();
      for (var i=0; i<allToppings.length ;i++) {
        if (allToppings[i].topping === thisTopping) {
          alert(allToppings[i]);
          myPizza.addTopping(allToppings[i]);

          break;
        }
      }
    });

    var thisSize = $("input[name='sizeRadio']:checked").val();
    alert (thisSize);
    if (!thisSize) {
      alert ("Gotta pick a size!");
    } else {
      myPizza.setSize(thisSize);
      myPizza.calculatePrice();
      var myString = "Custom pizza with ";
      var tempString = "";
      // var kbdEl = "<kbd>";
      // var kbdElRed = "<kbd class='premium'>";
      var kbd = "";

      for (var j=0; j < myPizza.toppings.length; j++) {
        myPizza.toppings[j].price > 1 ? kbd = "<kbd class='premium'>" : kbd = "<kbd class='standard'>";
        tempString = kbd + myPizza.toppings[j].topping + "</kbd> "
        myString += tempString;
      }

      myString += "is yours for: <strong>$" + myPizza.getTotalPrice().toFixed(2) + "</strong>.";

      $("#yourOrder").append(myString);

      $(this).unbind('click');
      $(this).addClass('disabled');
      $("#sizeButton").unbind('click');
      $("#sizeButton").addClass('disabled');
    
    }

  });
});
