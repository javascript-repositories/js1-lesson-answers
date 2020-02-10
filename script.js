const elephants = [
    { image: "https://elephant-api.herokuapp.com/pictures/001.jpg", note: null },
    { note: "From the Mysore Dasara procession." },
    { image: null, note: "Known for her tightrope walking act." }
];

// for loop
function createHtmlWithFor(images) {
    // add the opening </div>
    let html = "<div>";

    for (let i = 0; i < images.length; i++) {
        // default image url
        let imgUrl = "https://via.placeholder.com/250";

        if (images[i].image) {
            imgUrl = images[i].image;
        }

        // default alt value
        let altValue = "Elephant picture";

        if (images[i].note) {
            altValue = images[i].note;
        }

        html += `<img src="${imgUrl}" alt="${altValue}">`;
    }

    // add the closing </div>
    html += "</div>";

    return html;
}

const html1 = createHtmlWithFor(elephants);
console.log(html1);

// for loop with ternary operators for the default values
function createHtmlWithTernary(images) {
    // add the opening </div>
    let html = "<div>";

    for (let i = 0; i < images.length; i++) {
        // default image url
        let imgUrl = images[i].image ? images[i].image : "https://via.placeholder.com/250";
        // default alt value
        let altValue = images[i].note ? images[i].note : "Elephant picture";

        html += `<img src="${imgUrl}" alt="${altValue}">`;
    }

    // add the closing </div>
    html += "</div>";

    return html;
}

const html2 = createHtmlWithTernary(elephants);
console.log(html2);

// forEach loop
function createHtmlWithForEach(images) {
    let html = "<div>";

    images.forEach(img => {
        let imgUrl = img.image ? img.image : "https://via.placeholder.com/250";
        // default alt value
        let altValue = img.note ? img.note : "Elephant picture";

        html += `<img src="${imgUrl}" alt="${altValue}">`;
    });

    html += "</div>";
    return html;
}

const html3 = createHtmlWithForEach(elephants);
console.log(html3);
