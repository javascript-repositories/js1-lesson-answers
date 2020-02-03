// Question 1
const multiply = (a, b) => a * b;


// Question 2
() => console.log("Hello");


// Question 3
const frog = {
    colour: "green",
    getColour: function() {
        return this.colour;
    }
}

// Question 4
(function() {
    console.log(new Date());
})();


// Question 5
const animal = "mongoose";

const difficultToSpell = animal === "hippopotamus" ? true : false;

// you can wrap the condition in brackets if it's more readable to you
const difficultToSpell = (animal === "hippopotamus") ? true : false;

