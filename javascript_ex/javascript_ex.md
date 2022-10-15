# Self assesment javascript 

Get the exercises files : 
* Option 1 : Download the javascript_ex folder. 
* Option 2 : Continue with the project from the html/css exercises. 
    * create a new folder
    * copy the index.html file into the new folder
    * create a script.js file 
    * change in the index.html the path to the css file 

*** 

## Exercise 1 

Link the javascript file to the index_js.html (forgotten how to do this, [click here](https://www.w3schools.com/js/js_whereto.asp#:~:text=down%20the%20display.-,External%20JavaScript,-Scripts%20can%20also))

Declare the following arrays : <br>
``  
const green_veggies = ["Spinach", "Kale", "Broccoli", "Cucumber", "Lettuce"] ``
<br>
``
const orange_veggies = ["Carrots", "Sweet Potatoes", "Peppers", "Pumpkins", "Tumeric"]
``<br>
``
const red_veggies = ["Tomato", "Beetroots", "Peppers", "Radish", "Rhubarb"]
``<br> 
`` 
const yellow_veggies = ["Corn", "Squash", "Eggfruit", "Advocado", "Zucchini"]
`` <br> 

Answer the following questions : 
* What does the **const** mean ? 
* Can we still change the elements inside the array? 

[And here is the answer to these questions](https://www.w3schools.com/js/js_array_const.asp#:~:text=Arrays%20are%20Not%20Constants)

Write functions that : 
* can add a vegetable to an array 
* remove a vegetable in the array 
    * if the boolean first is true then remove the first element 
    * else remove the last element 

**Need inspiration use [this](https://www.w3schools.com/jsref/jsref_obj_array.asp)**

**Hint: you can check if your functions are correct by using the console.log(name_function)**

You can open the console by clicking right in the browser and then select "open console". 

***

## Exercise 2 

Now we want to be able to check if an veggie is already in the array before adding a new veggie. 

Create a function called : check_veggie_unique1 
* that uses a for-loop 
* uses a if-statement

Now create the same function but this time with a while-loop (called add_veggie_unique2)

**Check you answers with the script.js file given in the git-repo.**  

*** 

## Exercise 3 
In the javascript file we have created 4 arrays which contains all the veggies. 
Lets make our webpage a little bit more dynamic. 
Execute the following steps: 
* create a function called displayVeggieListAsUl(.. , .. )
* as parameters the veggielist and the id of the ul-tag
* use ``document.getElementById(id_list)``
* iterature through the veggies_array 
* use this code in the loop : 
    ``
        // creates a new li tag  
        var li = document.createElement("li");
        // creates the text for in the li tag 
        var text = document.createTextNode(array_veggies[i])
        // adds the text to the li tag 
        li.appendChild(text);
        // adds the li content to the ul tag in the html file
        ul.appendChild(li);
    ``
    ***Note this is one of the ways to do it, want more of challenge? Try to use the function [array.forEach](https://www.w3schools.com/js/js_array_iteration.asp#:~:text=JavaScript%20Array%20forEach()) function.

## Exercise 4 
In the beginning of these exercises we created the function remove_veggie(..) . Now we are going to make some changes and implement this feature in the website. 
Start by : 
* creating a new function called fixDisplayList(listId)
  ``
    // find list to fix 
    var item = document.getElementById(listId);
    // set all text within this element to ''
    item.textContent = '';
  ``

* adding an color argument 
* create a switch statement which makes the difference between the 4 colors. 

***Don't forget to add a default case*** 

* now lets add for each list buttons in the html page 
* give the onclick property the following text : 
    ``onclick="remove_veggie(green_veggies, true, 'green'); ``

* style the button with css however you like ;)

Now make the same button again but this time to remove the last element 

## Exercise 5 
When we can delete items, we also want to be able to add elements.
* Create an input and select input 