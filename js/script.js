// Question 1
fetch("https://api.rawg.io/api/games/4003/screenshots")
    .then(response => response.json())
    .then(json => createCarousel(json))
    .catch(error => console.log(error));

function createCarousel(json) {
    const carouselInner = document.querySelector(".carousel-inner");

    // loop through the results array on the json object
    // the index argument is the current index of the array being looped through
    json.results.forEach((screen, index) => {
        // set activeClass = "active" if this is the first slide
        const activeClass = index === 0 ? "active" : "";

        carouselInner.innerHTML += `<div class="carousel-item ${activeClass}">
                                        <img src="${screen.image}" class="d-block w-100">
                                    </div>`;
    });
}
