/*An event listener is a procedure in JavaScript that waits for an event to occur. A simple example of an event is a user clicking the mouse or pressing a key on the keyboard.
    The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

*/
/* syntax 
    addEventListener(type, listener)
    here type means after what type of event(mentioned in strings) you want the function to be called.
    listner here is the function(with no parenthesis) which we send as input to addeventlistner which will be called when specific event occurs.
    both are inputs sent to a function addeventlistner
    */


//Detecting button press

var no_of_buttons= document.querySelectorAll(".drum").length;



for(var i=0; i<no_of_buttons; i++){
    
document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);

 function handleclick(){
    
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
    
 }

}

/*here we add eventlistner to entire document so that 
entire webpage starts listning for keyboard strokes  

event type : keydown - ANY key is pressed
*/


/* here we  pass parameter to function which is x.
   It lets us tap into the event that triggered the event listner*/

/* keydown event has lot of properties
   one of it is 'key', it tells which key on the keyboard got tapped essentially
   */

   
//Detecting keyboarf press   
document.addEventListener("keydown", function(x){
    makeSound(x.key);

    buttonAnimation(x.key);
});


function makeSound(key){
    switch(key){
        case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;    

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
         var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
         break;


         case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break; 
                
                case "l":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;  
                    
                    
            default : console.log(buttonInnerHTML);


    }
}


function buttonAnimation(currentKey){

    var active_button = document.querySelector("." +currentKey);   //here all buttons also have class name by letters .class_name

    active_button.classList.add("pressed");

    setTimeout(function(){
        active_button.classList.remove("pressed");
    },100);
}


 /* Higher order functions are the functions that take other functions as inputs
 Passing function as a argument to another function 

    Eg: CALCULATOR  


      function add(num1, num2) {
return num1 + num2;
}
 
function subtract(num1, num2) {
return num1 - num2;
}
 
function multiply(num1, num2) {
return num1 * num2;
}
 
function divide(num1, num2) {
return num1 / num2;
}
 
function calculator(num1, num2, operator) {
return operator(num1, num2);
}
 
 */


/*Anonymous Function

It is a function that does not have any name associated with it. 
in anonymous functions in JavaScript, we use only the function keyword without the function name.
   

    ///another method for event
document.querySelector("button").addEventListener("click", function (){
    alert("I got clicked");
 });   */



/*when we write 'new Audio' we are creating an object inside variable named audio, which behind the scenes create 'HTMLaudio element'.
  HTMLmediaelement that we create has whole bunch of properties and methods which we can make the object do...and one of the method is play method which plays back our
  media
*/


/* 
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

*/

/* OBJECTS IN JS 

    we create a variable and assign a number of properties to the variable
    Eg: 
    var bellboy1= {
        name : "timmy",
        age: 19,
        hasWorkPermit : true,
        languages : ["French","Englsh"]

        moveSuitcase : function(){
            alert("May I take your suitcase?");
            pickUpSuitcase();
            move();
        }

    }

    This is called javascript object. in js objects we start with keyword 'var' and then in curly brackets
    we assign no of properties and methods for that object.(these properties are just variables associated with another variable)
    

    if we write name of the object then we get values of all the properties(object_name;)
    we use dot operator to access the values
    Eg : alert("Hello, my name is " + bellBoy1.name)



    /////CONSTRUCTORS FUNCTIONS///////
    in constructor function the first letter has to capitalised. the constructor
    funcn takes no of inputs and these are the inputs we r going to provide when we create
    new objects from this constructor function. Inside the constructor function we match the inputs 
    to property names

    Eg:

    function BellBoy(name, age, hasWorkPermit, languages){
        this.name= name;
        this.age= age;
        this.hasWorkPermit= hasWorkPermit;
        this.language =languages;

        this.clean=function(){
            alert("My job role  is ABC...")
        }
    }

     var bellboy1= new BellBoy("Timmy", 19, true, ["French", "English"]);
     var bellboy2= new BellBoy("Jimmy", 21, false, ["German", "English"]);
     bellboy2.clean();    ......(here calling a function created in the object)

*/

/*
    Use the switch statement to select one of many code blocks to be executed.

    syntax:
            
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}


*/


