//# Holiday Extra Credit assignment

//Create a new document called holidayExtraCredit.py or holidayExtraCredit.js (depending on which programming language you are learning) and complete the following prompt.

//This assignment will be graded on accuracy- NOT effort. Your code NEEDS to work to get full credit. 

//You will have until 8pm tonight, 12/19/2024 to complete this assignment. 

//MAKE SURE TO TEST YOUR CODE BEFORE YOU SUBMIT YOUR WORK

//## Holiday schedule function

//Create a function that will act as your holiday schedule planner. When you pass in a date. The event
//calenar should return an event that you have planned on that day. If there is no event on that day it should return "nothing is planned for this day". Your planner should encompass the dates
//  between 12/21/24
//through 1/7/2025. You should have atleast 5 events planned.

// ex. if a user passes in 12/21/2024, the program should return- on saturday dec. 21, I'm going to chill.
//- ex. if a user passes in 12/31/2024, the program should return- on tuesday dec. 31, I'm going to a new years party.
//- ex. if a user passes in 1/7/2024, the program should return- on monday Jan.1, I'm returning back to school.
function Days(calendar){
    console.log("Welcome to you calendar");
    if(calendar === 12/21/24){
        console.log("Little brothers birthday");

    }
    else if(calendar === 12/25/24){
        console.log("You Have A job Interveiw today");
    }
    else if(calendar ===1/1/25){
        console.log("New Years!!!")
    }
     else if(calendar === 12/31/24){
        console.log("New Years Eve Party!!!");

    }
     else if(calendar ===  1/7/25 ){
        console.log("Going back to school today");
    }
    else {
        console.log("You have nothing planned for today")
    }
}
Days(12/31/24)