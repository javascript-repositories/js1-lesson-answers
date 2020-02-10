const elephantUrl = "https://elephant-api.herokuapp.com/elephants";
const corsEnabledUrl = "https://cors-anywhere.herokuapp.com/" + elephantUrl;

// with regular functions
fetch(corsEnabledUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createElephantNames(json);
    })
    .catch(function(error) {
        console.log(error);
    });

// with arrow functions
// fetch(corsEnabledUrl)
//     .then(response => response.json())
//     .then(json => createElephantNames(json))
//     .catch(error => console.log(error));

function createElephantNames(elephants) {
    console.dir(elephants);

    const resultsContainer = document.querySelector(".results");

    let html = "";

    elephants.forEach(elephant => {
        // check that the name property exists
        if (elephant.name) {
            html += `<h4>${elephant.name}</h4>`;
        }
    });

    resultsContainer.innerHTML = html;
}
