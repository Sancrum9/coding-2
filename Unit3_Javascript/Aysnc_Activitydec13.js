//1.Create a function that will determine if a number passed into it's funtion parameters is either positive or negative. For example, If I pass in the number 10
// it should return the message,"this is a positive number", or if I type in the number -12, it should return the message, "this is a negative number.
//  If the user types in zero, it should return the message; "this is zero".
//function numbers(number){
//    if (number > 0){
//        console.log( "this is a positive number");
//    } if (number < 0){
//        console.log( "This is a negative number");
//    } if (number == 0) {
//        console.log( "it is nor negative or positive");
//}
//}
//numbers(0);
//2.You have been hired by netflix to help them develop a movie ticket program. You must create a function that will check the movie goers age and return
//the price of the movie ticket based on that person's age. Provided are the lists of age and the prices:

//10 and under should pay $5.00
//16 and up should pay $10.00
//20 an up should pay $15.00
//65 and up should pay 5.00

//function Prices(age){
//    if (age <= 10){
//        console.log( "Price will be 5$");
//    } if (age >= 16){
//        console.log( "Price will be 10$");
//    } if (age >= 20) {
//        console.log( "Price will be 15$");
 //   }
//    if (age >= 65){
//        console.log( "Price will be 5$");
//}
//}
//Prices(100)

//3.You have been hired by target to assist them with their store member discount software. The would like to make it so that shoppers who 
// have a specific membership tier can save a certain amount of money on the products they buy. provided below are the memberships and the discount amount they should recieve:
//superShopper should recieve a 10% discount on their items
//megaShopper should recieve a 15% discount on their items
//ultraShopper should receive a 20% discount on their items
//ou program should be able to take in the shoppers membership type, the name of the item they are purchasing, and the item price,
//  and should return a message telling the user what the final price of the item is and how much they saved.

//For example: congratulations superShopper, you saved $10.00 on this TV. Your final item price is $90.00.
function discounts(membership, itemPrice){
    console.log("Testing Function works");
    if(membership === "Supershopper" ){
        console.log("You are a SuperShopper. Here is your 10% discount");

        var discountAmmount = itemPrice *.10;
        console.log(discountAmmount)
        var total = itemPrice - discountAmmount;
        console.log(total);
    }
     else if(membership === "Megashopper" ){
        console.log("You are a MegaShopper. Here is your 15% discount");
        var discountAmmount = itemPrice *.15;
        console.log(discountAmmount)
        var total = itemPrice - discountAmmount;
        console.log(total);
    }
     else if(membership === "Ultrashopper" ){
        console.log("You are a UltraShopper. Here is your 20% discount");
        var discountAmmount = itemPrice *.20;
        console.log(discountAmmount)
        var total = itemPrice - discountAmmount;
        console.log(total);
    }
    else {
        console.log("Error. soory this memebership no loger exist")
    }
}
discounts("Supershopper" , 100)