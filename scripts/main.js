
var coffeeOrders = [];
var orderNumber = 0;

var orderForm = document.querySelector('form');
orderForm.addEventListener('submit', function(event){
    // Prevents default handling of submit 
    event.preventDefault();

    // Get all the values for a coffee order
    var coffeeValue = orderForm.coffee.value;
    var emailValue = orderForm.emailAddress.value;
    var flavorValue = orderForm.flavor.value;
    var strValue = orderForm.strength.value;

   // Checks for which radio button is selected
    function getRadio(rName) {
        var radioButtons = document.getElementsByName(rName);
        for (var i=0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) 
                return radioButtons[i].value;
        }
        return '';
    }
    var sizeValue = getRadio('size');

    //increases order number each time submit is clicked
    ++orderNumber; 

    function guidGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4());
    }
    

    // Creates array with object
    var coffeeList = {"coffee":coffeeValue,
                    "email":emailValue,
                    "size":sizeValue,
                    "flavor":flavorValue,
                    "strength":strValue,
                    "id":guidGenerator()};
                    
    //Puts Order into Order Array
    coffeeOrders.push(coffeeList);

    // Creates the tag hierarchy div>ul>button  
    var newDiv = document.createElement('div');
    newDiv.setAttribute("id", coffeeList.id);
    var newUl = document.createElement('ul');
    var section = document.querySelector('section');
    var btnComplete = document.createElement('button');
    btnComplete.innerHTML = "Complete Order";
    btnComplete.setAttribute("type", "complete")

    var display1Array = JSON.stringify(coffeeList.coffee, null, 4);
    var display2Array = JSON.stringify(coffeeList.email, null, 4);
    var display3Array = JSON.stringify(coffeeList.size, null, 4);
    var display4Array = JSON.stringify(coffeeList.flavor, null, 4);
    var display5Array = JSON.stringify(coffeeList.strength, null, 4);
    newUl.innerHTML = '<h5>Order# ' + orderNumber + '</h5>Coffee Order: '+ display1Array + '<br>' + 'Email: ' + display2Array + '<br>' + 'Size: ' + display3Array + '<br>' + 'Flavor Shot: ' + display4Array+ '<br>' + 'Caffeine Rating: ' + display5Array + '<br>';

    section.appendChild(newDiv);
    newDiv.appendChild(newUl);
    newUl.classList.add("not-completed");
    newUl.appendChild(btnComplete);

    btnComplete.addEventListener('click', function(){
        var divId = newDiv.id
        newDiv.remove();
        var updatedOrders = [];
        for(var i = 0; i < coffeeOrders.length; i++) {
            if(coffeeOrders[i].id !== divId) {
                updatedOrders.push(coffeeOrders[i]);
            }
        }
        coffeeOrders = updatedOrders;
    });

}); //end of orderform eventListner



    


