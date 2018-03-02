
var jsonString = localStorage.getItem('orders');
var localStorageOrders = JSON.parse(jsonString); 
var coffeeOrders = [];
var orderNumber = 0;
var serverOrders = [];
var newServerOrders = [];

    var getServerData = function() {
        console.log(savedata);//doest work 

        return savedata = $.get("https://dc-coffeerun.herokuapp.com/api/coffeeorders",function(data) {
            makeNewArrayFromServer(data);
            console.log(newServerOrders); //works

        });
    };
      
    var makeNewArrayFromServer = function(array) {
        $.each(array, function( i, val ) {
            var coffeeList = {"coffee":val.coffee,
                    "email":val.emailAddress,
                    "size":val.size,
                    "flavor":val.flavor,
                    "strength":val.strength,
                    "id":val._id};
                    newServerOrders.push(coffeeList);
                    
          }) 
          console.log(newServerOrders);//works
    };
    console.log(getServerData(newServerOrders));
  

// var createOrdersFromLocal = function () {
//     if (localStorageOrders===null) {
//         localStorageOrders=[];
//     } else {
//     localStorageOrders.forEach(function(array) {
//         var localDiv = document.createElement('div');
//         var localUl = document.createElement('ul');
//         var section = document.querySelector('section');
//         var btnComplete = document.createElement('button');
//         btnComplete.innerHTML = "Complete Order";
//         btnComplete.setAttribute("type", "complete");
//         section.appendChild(localDiv);
//         localDiv.appendChild(localUl);
//         localDiv.classList.add("not-completed");
//         localUl.innerHTML = '<h5>Order# ' + orderNumber + '</h5>Coffee Order: '+ array.coffee + '<br>' + 'Email: ' + array.email + '<br>' + 'Size: ' + array.size + '<br>' + 'Flavor Shot: ' + array.flavor + '<br>' + 'Caffeine Rating: ' + array.strength + '<br>';
//         localUl.appendChild(btnComplete);
       
//     })
// }
// };

// createOrdersFromLocal();



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

    var display1Array = JSON.stringify(coffeeList.coffee);
    var display2Array = JSON.stringify(coffeeList.email);
    var display3Array = JSON.stringify(coffeeList.size);
    var display4Array = JSON.stringify(coffeeList.flavor);
    var display5Array = JSON.stringify(coffeeList.strength);
    newUl.innerHTML = '<h5>Order# ' + orderNumber + '</h5>Coffee Order: '+ display1Array + '<br>' + 'Email: ' + display2Array + '<br>' + 'Size: ' + display3Array + '<br>' + 'Flavor Shot: ' + display4Array+ '<br>' + 'Caffeine Rating: ' + display5Array + '<br>';

    section.appendChild(newDiv);
    newDiv.appendChild(newUl);
    newDiv.classList.add("not-completed");
    newUl.appendChild(btnComplete);

    // Enables buttons to delete order and updates array
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
    
localStorage.setItem('orders', JSON.stringify(coffeeOrders));

});

orderForm.addEventListener('reset', function(event){
    // Prevents default handling of submit 
    event.preventDefault();
    localStorage.clear();
    var a = document.querySelectorAll('.not-completed');
    for (var i = 0; i < a.length;i++) {
        a[i].remove();
    }
});



    


