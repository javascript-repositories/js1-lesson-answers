const cars = [
    {
        type: "BMW",
        age: 4,
        beenInAnAccident: false
    },
    {
        type: "Toyota",
        beenInAnAccident: true
    },
    {
        type: "Ford",
        age: 7,
        beenInAnAccident: true
    }
];

// using a for loop
for (let i = 0; i < cars.length; i++) {
    if (cars[i].age) {
        console.log(cars[i].age);
    } else {
        console.log("Unkown");
    }
}

// using a forEach
cars.forEach(car => {
    if (car.age) {
        console.log(car.age);
    } else {
        console.log("Unkown");
    }
});

// using a forEach and a ternary operator
// https://interactive-content.now.sh/javascript-1/3/1#ternary
cars.forEach(car => {
    const age = car.age ? car.age : "Unknown";
    console.log(age);
});

// using a forEach and the hasOwnProperty method
// we haven't looked at the hasOwnProperty but it checks whether a property exists on an object
cars.forEach(car => {
    if (car.hasOwnProperty("age")) {
        console.log(car.age);
    } else {
        console.log("Unkown");
    }
});
