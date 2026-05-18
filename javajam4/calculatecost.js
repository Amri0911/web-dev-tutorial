
while(true){
varID=prompt("Enter the Coffee Bean ID (1-4)(0 to stop): \n 1: Brazil Cerrado (RM42 per pack) \n 2: Vanguard Blend (RM42 per pack) \n 3: Organic Marcala (RM56 per pack) \n 4: Taster Pack Trio (RM 69 per pack)")
if(varID>=0 && varID<5){
    break;
}
else{
    alert("Coffee Bean ID must be between 1 and 4 or 0 to stop. Please try again.");
}
}
var quantity=prompt("Enter the number of pack of coffee beans that you want to order:")

function calculateCost(varID, quantity){
    var cost=0;
    switch(varID){
        case "1":
            cost=42*quantity;
            break;
        case "2":
            cost=42*quantity;
            break;
        case "3":
            cost=56*quantity;
            break;
        case "4":
            cost=69*quantity;
            break;
        default:
            cost=0;
    }    return cost;
}

var totalCost=calculateCost(varID, quantity);
alert("The total cost of your order is RM" + totalCost);
           