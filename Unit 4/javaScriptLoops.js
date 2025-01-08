function educationRank(gradeLevel){
    if(gradeLevel == 1){
        console.log("you are a freshman in undergrad")
    } else if (gradeLevel == 2){
        console.log("you are a sophmore in undergrad")
    } else if (gradeLevel == 3){
    console.log("you are a junior in undergrad")
    } else if (gradeLevel == 4){
        console.log("you are a senior in undergrad")
    } else if (gradeLevel == 5 || gradeLevel == 6){
        console.log("you are in a masters program in graduate school.")
    } else {
        console.log("Err. Please check your code.")
    }
}
educationRank(6)