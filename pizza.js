




function getReceipt() {
    
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;

	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");

	var cheeseArray =document.getElementsByClassName("cheese");
	var cheeseTotal =0;

	var sauceArray = document.getElementsByClassName("sauce");
	
	var crustArray =document.getElementsByClassName("crust");
	var crustTotal =0;
	

    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }


    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } 



	for (var m = 0; m < sauceArray.length; m++) {
     if (sauceArray[m].checked) {
           var selectedSauce = sauceArray[m].value;
		text1 = text1+selectedSauce+"<br>";
			
       }
    }




    for (var c = 0; c < crustArray.length; c++) {
        if (crustArray[c].checked) {
            var selectedCrust = crustArray[c].value;
            text1 = text1+selectedCrust+"<br>";
        }
    }


    if (selectedCrust === "Plain Crust") {
        crustTotal = 0;
    } else if (selectedCrust === "Garlic Butter Crust") {
        crustTotal = 0;
    } else if (selectedCrust === "Cheese Stuffed Crust") {
        crustTotal = 3;
    } else if (selectedCrust === "Spicy Crust") {
		crustTotal = 0;
    } 
	else if (selectedCrust === "House Special Crust") {
		crustTotal = 0;
    } 



	for (var j = 0; j < cheeseArray.length; j++) {
        if (cheeseArray[j].checked) {
            var selectedCheese = cheeseArray[j].value;
            text1 = text1+selectedCheese+"<br>";
        }
    }

	if (selectedCheese === "Regular Cheese") {
        cheeseTotal = 0;
    } else if (selectedCheese === "No cheese") {
        cheeseTotal = 0;
    } else if (selectedCheese === "Extra Cheese") {
        cheeseTotal = 3;}



    runningTotal = sizeTotal+cheeseTotal+crustTotal;
	
	
	
	//getVeg(runningTotal,text1);
	getMeat(runningTotal,text1);

};



function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var p = 0; p < meatArray.length; p++) {
		if (meatArray[p].checked) {
			selectedMeat.push(meatArray[p].value);
		
			text1 = text1+meatArray[p].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	getVeg(runningTotal,text1);
};

function getVeg(runningTotal,text1) {
	var vegTotal = 0;
	var selectedVeg = [];
	var vegArray = document.getElementsByClassName("veggies");
	for (var l = 0; l < vegArray.length; l++) {
		if (vegArray[l].checked) {
			selectedVeg.push(vegArray[l].value);
			text1 = text1+vegArray[l].value+"<br>";
		}
	}
	var vegCount = selectedVeg.length;
	if (vegCount > 1) {
		vegTotal = (vegCount - 1);
	} else {
        vegTotal = 0;
	}
	runningTotal = (runningTotal + vegTotal);

	callTotal(runningTotal,text1);

};	

function callTotal(runningTotal,text1){

	//getVeg(runningTotal,text1);

	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";


};