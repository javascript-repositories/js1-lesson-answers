const randomUrl = "https://elephant-api.herokuapp.com/elephants/random";
const corsEnabledUrl = "https://cors-anywhere.herokuapp.com/" + randomUrl;

// with regular functions
// fetch(corsEnabledUrl)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(json) {
//         displayElephantDetails(json);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

// with arrow functions
fetch(corsEnabledUrl)
    .then(response => response.json())
    .then(json => displayElephantDetails(json))
    .catch(error => console.log(error));

function displayElephantDetails(elephantArray) {
    console.dir(elephantArray);

    const elephant = elephantArray[0];

    const container = document.querySelector(".elephant-container");
    const noResult = document.querySelector(".no-result");

    // check the object has all required properties
    if (elephant.name && elephant.image && elephant.note) {
        const heading = document.querySelector("h1");
        heading.innerHTML = elephant.name;

        const img = document.querySelector("img");
        img.src = elephant.image;
        img.alt = elephant.name;

        const note = document.querySelector(".note");
        note.innerHTML = elephant.note;

        container.classList.remove("hidden");
    } else {
        noResult.classList.remove("hidden");
    }
}
