var coffeeOrders = [];

var orderForm = document.querySelector('form');
orderForm.addEventListener('submit', function(event){
    // Prevents default handling of submit 
    event.preventDefault();

    // Get all the values for a coffee order
    var coffeeValue = orderForm.querySelector('[name="coffee"]').value;
    var emailValue = orderForm.querySelector('[name="emailAddress"]').value;
    var sizeValue = orderForm.querySelector('[name="size"]').value;
    var flavorValue = orderForm.querySelector('[name="flavor"]').value;
    var strValue = orderForm.querySelector('[name="strength"]').value;

    // Pushes all values into one object in array
    coffeeOrders.push({'coffee':coffeeValue,
                    'email':emailValue,
                    'size':sizeValue,
                    'flavor':flavorValue,
                    'strength':strValue});

    console.log(coffeeOrders);

});