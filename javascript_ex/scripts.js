


/* Skills to include 


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

function check_veggie_unique1(name_array, name_veggie){

    const length_array = name_array.length
    let found_element = false; 
    for(let i = 0 ; i < length_array ; i++){
        if( name_array[i] == name_veggie){
            found_element = true 
        }
    }

    return found_element; 
}

// note that this is one of the ways that you can do this. 
// Have you found a different solution, let me (Merel) know ;)

//console.log(check_veggie_unique1(red_veggies, "Rhubarb"))
//console.log(check_veggie_unique1(red_veggies, "Rhubarbss"))

function check_veggie_unique2(name_array, name_veggie){

    let found_element = false; 
    let i = 0 ; 
    while( i < name_array.length){
        if( name_array[i] == name_veggie){
            found_element = true ; // we can also direct write the return statement here
        }
        i++; // means the same as i = i + 1 ; 
    }

    return found_element; 
}

//console.log(check_veggie_unique2(red_veggies, "Rhubarb"))
//console.log(check_veggie_unique2(red_veggies, "Rhubarbss"))


// works the same way --> but different syntax 
function check_veggie_unique22(name_array, name_veggie){

    let found_element = false; 
    let i = 0 ; 
    do{
        if( name_array[i] == name_veggie){
            found_element = true ; // we can also direct write the return statement here
        }
        i++; // means the same as i = i + 1 ; 
    }while( i < name_array.length)

    return found_element; 
}

//console.log(check_veggie_unique22(red_veggies, "Rhubarb"))
//console.log(check_veggie_unique22(red_veggies, "Rhubarbss"))

/*
    * automate/update the way to display the array_veggies 
    * add veggie with form-type input + confirmation 
        --> use an general adding input 
        --> swtich between the colors 
    * delete buttons next to the veggies names 

    // finish in the bus 

*/ 

/* something like this again 
function giveMeFunctions(){
    var functions = [] ;
    for(var i = 0 ; i< 3 ; i++){
        console.log("First i = " + i)
        functions[i] = function (args) {
            return function(){
                console.log("Second i = " + i )
                console.log("Second args = " + args )
    
                return args* args; 
            }
        }
    }(i);

    return functions;
}

var myFunctions = giveMeFunctions();
for(var i = 0 ; i< myFunctions.length ; i++){
    console.log(i + ": " + myFunctions[i]())
} */ 