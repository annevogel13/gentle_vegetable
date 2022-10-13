# Self assesement

## Level : Beginner

start with creating two files : 
* index.html
* style.css 

### Exercise 1 

Execute the following steps: 
* Initiate the index.html file with the standard html lines 
* Fill for the title "Gentle Vegetable" 
* Create a top-level header with 
    * line under and above the title 
    * a different color 
    * a different font 
    * aligned to the center 

    **Don't forget to link the style.css file to the index.html**

* Create two unorderd lists : 
    * green vegetables
    * orange vegetables 
    (for inspiration see the final website)
* Add a green background for the green vegetables (idem for the orange one) 

***

### Exercise 2 

To give our webpage more color, we want to add an image to the website. In the folder **images** you can find the images I used. Add the images to the html page. And use CSS styling to display to images with : 
* border of 3px
* black border
* width of border thick 
* add alt description 

***

### Exercise 3

Now to make navigation a bit easier on our webpage. We are going to add bookmarks (anchors) to our page. You can see this as the beginning of a navigation bar. 

Start by creating a unoderded list at the top of the page. And then do the following steps : 
* change the list style to none 
* change the block display 
* give a  border 
* add id-tags to the green and orange list 
* add to the li-tags in the navbar the a-tag 

***


## Level : Intermediate 

### Exercise 1

Now we want to display to two list side by side. There are multiple ways to do this. Choose the way you feel the most comfortable with. 

hidden : 
* creation of 2 div's 
* changing inline-block properties 
* changing the width propertie 
* creating table (very difficult)

But now, the page looks kind of ugly. 
So now we want to centeralise the text inside the div.
This causes the list to look funny. So we want to remove the list symboles

***

### Exercise 2 

Ofcourse there a more colors vegetables and if we want to display them we will need flexboxes. 

First let create two more vegetable lists:
* red veggies
* yellow veggies 

Now lets create flexboxes 
* create one big div around all the veggie lists <-- this will be the flex container 
* give this div the id = "flexContainer" 
* give flexContainer the properties
    * display : flex; 
    * flex-direction: row;
    * flex-wrap : wrap; 
    * justify-content: space-around;
    for explanation about these terms visit [W3schools Container page](https://www.w3schools.com/css/css3_flexbox_container.asp)

    Play with these different properties to fully understand flexboxes. 

## Exercise 3 

Now we are trying to create the same layout with the CSS grid system. Therefor we will copy the index.html file. And rename it index_grid.html 

* rename flexContainer to gridContainer
* create gridContainer in css with the display grid property 

The easiest way is to say use [grid-template columns](https://www.w3schools.com/css/css_grid_container.asp).

But if we want to do it the manual way it goes as follows : 
* in previous exercises we created the following id's : 
    * green
    * red
    * orange
    * yellow 
  these id's will now serve as grid-item identifiers. Add in the css file the property grid-colum with either the number 1 or 2. And see what changes. 

* now give the following id's :
    * green div grid-item : 1 / 3 ; 
    * red div grid-item : 2 ; 
    * green div grid-item : 1 ; 
    * green div grid-item : 1 / 3 ; 
And observe the changes 

* Now add to gridContainer in the css file the following : justify-content: space-between; 
And observe the changes. 

For more properties about the grids use the [css grid page on the w3schools website](https://www.w3schools.com/css/css_grid.asp). And try out the properties in css and if you have questions. Ask them ;) 

## Exercise 4 
Make a group of two people.
One person is going to prepare an explanation about the css grid and how it works. And why it good to use it. The other person is going to prepare the explanation about the flexboxes. 

When you prepared your explanation you will give it to the other one. And feel free to asks them more questions. 

Good luck 

