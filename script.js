const destinations = [
    {
        name: "Paris, France",
        image: "paris.jpg",
        text: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture.",
        button: "Book",
    },
    {
        name: "Paris, France",
        image: "paris.jpg",
        text: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture.",
        button: "Book",
    },
    {
        name: "Paris, France",
        image: "paris.jpg",
        text: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture.",
        button: "Book",
    },
    {
        name: "Paris, France",
        image: "paris.jpg",
        text: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture.",
        button: "Book",
    },
    {
        name: "Paris, France",
        image: "paris.jpg",
        text: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture.",
        button: "Book",
    },
    {
        name: "Paris, France",
        image: "paris.jpg",
        text: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture.",
        button: "Book",
    },
];

const addDestination = (
    name,
    image,
    text,
    button,
    section,
    large = "3",
    medium = "4",
    normal = "6"
) => {
    const $col = $("<div>");
    $col.addClass(`col-lg-${large} col-md-${medium} col-${normal}`);
    const $card = $("<div>");
    $card.addClass("card");

    const $img = $("<img>");
    $img.attr("src", "./" + image);

    $card.append($img);

    let $body, $h5, $p, $button;

    if (name && text && button) {
        $body = $("<div>");
        $body.addClass("card-body");

        $h5 = $("<h5>");
        $h5.addClass("card-title");
        $h5.text(name);

        $p = $("<p>");
        $p.addClass("card-text");
        $p.text(text);

        $button = $("<a>");
        $button.attr("href", "#");
        $button.addClass("btn btn-primary");
        $button.text(button);

        $body.append($h5, $p, $button);
    }

    $card.append($body);

    $col.append($card);

    section.append($col);
};

$(function () {
    //on DOM ready
    $("body").scrollspy({ target: "#epicode-navbar" });

    for (const destination of destinations.slice(0, 4)) {
        addDestination(
            destination.name,
            destination.image,
            destination.text,
            destination.button,
            $("#dealoftheweek-section .row")
        );
    }

    for (const destination of destinations.slice(0, 6)) {
        addDestination(
            destination.name,
            destination.image,
            destination.text,
            destination.button,
            $("#welcomesummer-section .row"),
            2,
            4,
            6
        );
    }

    for (const destination of destinations) {
        addDestination(
            "",
            destination.image,
            "",
            "",
            $("#lastminute-section .row"),
            4,
            4,
            6
        );
    }
});
