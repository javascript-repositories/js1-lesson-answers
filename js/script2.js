// Question 1
fetch("https://api.rawg.io/api/games/4003/screenshots")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createCarousel(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function createCarousel(json) {
    // assign the results array to a variable
    const screenshots = json.results;

    let html = "";

    for (let i = 0; i < screenshots.length; i++) {
        // set activeClass = "active" if this is the first slide
        let activeClass = "";

        if (i === 0) {
            activeClass = "active";
        }

        html += `<div class="carousel-item ${activeClass}">
                    <img src="${screenshots[i].image}" class="d-block w-100">
                </div>`;
    }

    const carouselInner = document.querySelector(".carousel-inner");
    carouselInner.innerHTML = html;
}
