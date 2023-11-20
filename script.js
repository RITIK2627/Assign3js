document.addEventListener('DOMContentLoaded', function () {
    // Dynamically add student ID and name to the page
    var studentInfo = document.getElementById('student-info');
    studentInfo.innerText = "Student ID: 200544013| Name: Ritik Patel";

    // Add event listener to the order button
    document.getElementById('order-btn').addEventListener('click', function () {
        captureAndDisplayPizza();
    });
});

function captureAndDisplayPizza() {
    var pizzaSize = document.getElementById('pizza-size').value;
    var pizzaToppings = document.getElementById('pizza-toppings').value.split(',').map(t => t.trim());
    var sauceType = document.getElementById('sauce-type').value;
    var cheeseOptions = document.getElementById('cheese-options').value;
    var crustType = document.getElementById('crust-type').value;

    // Additional form options:
    var deliveryAddress = document.getElementById('delivery-address').value;
    var deliveryTime = document.getElementById('delivery-time').value;

    var pizza = new Pizza(pizzaSize, pizzaToppings, sauceType, cheeseOptions, crustType, deliveryAddress, deliveryTime);
    document.getElementById('pizza-description').innerText = pizza.getDescription();
}

class Pizza {
    constructor(size, toppings, sauceType, cheeseOptions, crustType, deliveryAddress, deliveryTime) {
        this.size = size;
        this.toppings = toppings;
        this.sauceType = sauceType;
        this.cheeseOptions = cheeseOptions;
        this.crustType = crustType;
        this.deliveryAddress = deliveryAddress;
        this.deliveryTime = deliveryTime;
    }

    getDescription() {
        return `Size: ${this.size}, Toppings: ${this.toppings.join(', ')}, Sauce: ${this.sauceType}, Cheese: ${this.cheeseOptions}, Crust: ${this.crustType}, Delivery Address: ${this.deliveryAddress}, Delivery Time: ${this.deliveryTime}`;
    }
}
