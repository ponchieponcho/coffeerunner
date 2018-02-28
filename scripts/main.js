
var coffeeOrders = [];

var orderForm = document.querySelector('form');
orderForm.addEventListener('submit', function(event){
    // Prevents default handling of submit 
    event.preventDefault();

    // Get all the values for a coffee order
    var coffeeValue = orderForm.querySelector('[name="coffee"]').value;
    var emailValue = orderForm.querySelector('[name="emailAddress"]').value;
    // var sizeValue = document.querySelector('input[name=size]:checked').value;
    var flavorValue = orderForm.querySelector('[name="flavor"]').value;
    var strValue = orderForm.querySelector('[name="strength"]').value;

    function getRadio(rName) {
        var radioButtons = document.getElementsByName(rName);
        for (var i=0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) 
                return radioButtons[i].value;
        }
        return '';
    }

    var sizeValue = getRadio('size');
    console.log(sizeValue);

    // Pushes all values into one object in array
    var coffeeList = {"coffee":coffeeValue,
                    "email":emailValue,
                    "size":sizeValue,
                    "flavor":flavorValue,
                    "strength":strValue};
        
    coffeeOrders.push(coffeeList);
    var newDiv = document.createElement('div');
    var newUl = document.createElement('ul');
    var section = document.querySelector('section');
    var display1Array = JSON.stringify(coffeeList.coffee, null, 4);
    var display2Array = JSON.stringify(coffeeList.email, null, 4);
    var display3Array = JSON.stringify(coffeeList.size, null, 4);
    var display4Array = JSON.stringify(coffeeList.flavor, null, 4);
    var display5Array = JSON.stringify(coffeeList.strength, null, 4);
    newUl.innerHTML = 'Coffee Order: '+ display1Array + '<br>' + 'Email: ' + display2Array + '<br>' + 'Size: ' + display3Array + '<br>' + 'Flavor Shot: ' + display4Array+ '<br>' + 'Caffeine Rating: ' + display5Array;
   
    section.appendChild(newDiv);
    newDiv.appendChild(newUl);

});

