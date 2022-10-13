


/* Skills to include 

Practice frequently used loops combined with console.log:
For statement
Do… while statement
For… of statement
Switch statement
Looping through arrays to find a certain value
Practice through simplified real life situations:
Create an arrow function that logs/returns “Hello, my name is <name>”
Create a function inside a function
if/else statements
Create your own promise
Use a generator function
Loop over an array with a generator

*/

const green_veggies = ["Spinach", "Kale", "Broccoli", "Cucumber", "Lettuce"]
const orange_veggies = ["Carrots", "Sweet Potatoes", "Peppers", "Pumpkins", "Tumeric"]
const red_veggies = ["Tomato", "Beetroots", "Peppers", "Radish", "Rhubarb"]
const yellow_veggies = ["Corn", "Squash", "Eggfruit", "Advocado", "Zucchini"]


console.log(orange_veggies)

function add_veggie(name_veggie, name_array){

    name_array.push(name_veggie)
    return name_array 
}

// console.log(add_veggie("Apple", red_veggies))

function remove_veggie(name_array, first){

    if(first == true){
        name_array.shift(name_array)
    }else{
        name_array.pop(name_array)
    }
    
    return name_array 
}

//console.log(remove_veggie(orange_veggies, false))

