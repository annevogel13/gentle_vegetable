
/* Skills to include 
Create an arrow function that logs/returns “Hello, my name is <name>”
Create a function inside a function
Create your own promise
Use a generator function
Loop over an array with a generator
*/

const green_veggies = ["Spinach", "Kale", "Broccoli", "Cucumber", "Lettuce"]
const orange_veggies = ["Carrots", "Sweet Potatoes", "Peppers", "Pumpkins", "Tumeric"]
const red_veggies = ["Tomato", "Beetroots", "Peppers", "Radish", "Rhubarb"]
const yellow_veggies = ["Corn", "Squash", "Eggfruit", "Advocado", "Zucchini"]


console.log(orange_veggies)

function add_veggie(name_veggie, name_array) {

    name_array.push(name_veggie)

    return name_array
}

function addVeggieForm(){
    // get the value from the input 
    const new_veggie = document.getElementById("new_veggie").value
    // get an array of the radio buttons 
    var new_veggie_color_array = document.getElementsByName('color_veggie');
    // create the variable 
    var new_color_veggie = ''

    // loop trough the array to find the radio button that is checked 
    for(i = 0; i < new_veggie_color_array.length; i++) {
        if(new_veggie_color_array[i].checked){
            // store the value in new_color_veggie 
            new_color_veggie = new_veggie_color_array[i].value
        }
    }

    // write an clear message in the console to track the changements in the website 
    console.log("Add " + new_veggie +" " + new_color_veggie)

    // find the correct color list 
    switch(new_color_veggie){
        case "green":
            // add the veggie to the array 
            add_veggie(new_veggie, green_veggies); 
            // remove the list items in the html page 
            fixDisplayList('listGreen');
            // rewrite the list items in the html page 
            displayVeggieListAsUl2(green_veggies, 'listGreen');
            break;
            // idem for the other cases 
        case "orange":
            add_veggie(new_veggie, orange_veggies); 
            fixDisplayList('listOrange');
            displayVeggieListAsUl2(orange_veggies, 'listOrange');
            break;
        case "red":
            add_veggie(new_veggie, red_veggies); 
            fixDisplayList('listRed');
            displayVeggieListAsUl2(red_veggies, 'listRed');
            break;
        case "yellow":
            add_veggie(new_veggie, yellow_veggies); 
            fixDisplayList('listYellow');
            displayVeggieListAsUl2(yellow_veggies, 'listYellow');
            break;
    }
}
// console.log(add_veggie("Apple", red_veggies))

// assignment 5 
function fixDisplayList(listId) {
    // find list to fix 
    var item = document.getElementById(listId);
    // set all text within this element to ''
    item.textContent = '';
}

function remove_veggie(name_array, first, color) {

    if (first == true) {
        name_array.shift(name_array)
    } else {
        name_array.pop(name_array)
    }

    // ex 4 now we want to automatically update the list 
    switch (color) {
        case "green":
            fixDisplayList('listGreen');
            displayVeggieListAsUl2(green_veggies, 'listGreen');
            break;
        case "orange":
            fixDisplayList('listOrange');
            displayVeggieListAsUl2(orange_veggies, 'listOrange');
            break;
        case "red":
            fixDisplayList('listRed');
            displayVeggieListAsUl2(red_veggies, 'listRed');
            break;
        case "yellow":
            fixDisplayList('listYellow');
            displayVeggieListAsUl2(yellow_veggies, 'listYellow');
            break;
        default: console.log("error in color code, line 70 script.js")

    }

    return name_array
}

//console.log(remove_veggie(orange_veggies, false))

function check_veggie_unique1(name_array, name_veggie) {

    const length_array = name_array.length
    let found_element = false;
    for (let i = 0; i < length_array; i++) {
        if (name_array[i] == name_veggie) {
            found_element = true
        }
    }

    return found_element;
}

// note that this is one of the ways that you can do this. 
// Have you found a different solution, let me (Merel) know ;)

function check_veggie_unique2(name_array, name_veggie) {

    let found_element = false;
    let i = 0;
    while (i < name_array.length) {
        if (name_array[i] == name_veggie) {
            found_element = true; // we can also direct write the return statement here
        }
        i++; // means the same as i = i + 1 ; 
    }

    return found_element;
}

// works the same way --> but different syntax 
function check_veggie_unique22(name_array, name_veggie) {

    let found_element = false;
    let i = 0;
    do {
        if (name_array[i] == name_veggie) {
            found_element = true; // we can also direct write the return statement here
        }
        i++; // means the same as i = i + 1 ; 
    } while (i < name_array.length)

    return found_element;
}


// difficult version 
function displayVeggieListAsUl2(array_veggies, id_list) {
    var ul = document.getElementById(id_list);

    array_veggies.forEach(element => {

        var li = document.createElement("li");
        var btn = document.createElement("button")
        btn.className = "delete"
        
        var text = document.createTextNode(element)
        li.appendChild(text);
        li.appendChild(btn)
        ul.appendChild(li);
    });
}

// easy function 
function displayVeggieListAsUl(array_veggies, id_list) {

    var ul = document.getElementById(id_list);

    for (let i = 0; i < array_veggies.length; i++) {

        var li = document.createElement("li");
        var text = document.createTextNode(array_veggies[i])
        var btn = document.createElement("button")
        btn.className = "delete"
        
        li.appendChild(text);
        li.appendChild(btn)
        ul.appendChild(li);
    }
}
