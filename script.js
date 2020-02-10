const elephants = [
    { image: "https://elephant-api.herokuapp.com/pictures/001.jpg", note: "Given to a Carolingian emperor." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "From the Mysore Dasara procession." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "Known for her tightrope walking act." }
];

// for loop
function createHtmlWithFor(images) {
    let html = "";

    for (let i = 0; i < images.length; i++) {
        html += `<img src="${images[i].image}" alt="${images[i].note}">`;
    }

    return html;
}

const html1 = createHtmlWithFor(elephants);
console.log(html1);

// forEach loop
function createHtmlWithForEach(images) {
    let html = "";

    images.forEach(img => {
        html += `<img src="${img.image}" alt="${img.note}">`;
    });

    return html;
}

const html2 = createHtmlWithForEach(elephants);
console.log(html2);
