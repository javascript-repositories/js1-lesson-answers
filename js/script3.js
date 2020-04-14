const url = "https://api.rawg.io/api/games/4003/screenshots";

async function getScreenshots() {
    const res = await fetch(url);
    const json = await res.json();

    const screenshots = json.results;

    const container = document.querySelector(".carousel-inner");

    let html = "";

    screenshots.forEach(function (ss, index) {
        console.log(ss.image);

        let activeClass = "";

        if (index === 0) {
            activeClass = "active";
        }

        html += `<div class="carousel-item ${activeClass}">
                    <img class="d-block w-100" src="${ss.image}" />
                </div>`;
    });

    container.innerHTML = html;
}

getScreenshots();
