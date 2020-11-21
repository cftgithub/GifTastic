// API from Giphy Developers

$(document).ready(function () {
    var topics = ["sports", "basketball", "baseball", "football", "skiing", "swimming", "table tennis",
        "hockey", "golf", "bull riding", "gymnastics", "martial arts", "racing", "cycling"];
    console.log(topics);

    $("button").on("click", function () {
        displayGif;
        addButton;
    });

    function displayGif() {
        var sports = $(this).attr("type-sports");
        var queryURL = "https://api.giphy.com/v1/gifs/random?tag=" +
            sports + "&api_key=RBG2FZTkXcKXAkOSnsX2B1SQR6CsfgeW&rating=G";
        console.log(this);

        //   AJAX call
        for (var i = 0; i < 5; i++) {

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);

                var topic = response.data;

                var sportDiv = $("<div class='card border-dark mb-5' style='width: 20rem'>");
                var selectImage = $("<img>");
                var rating = $("<p>").text("Rating: " + topic.rating.toUpperCase());
                var title = $("<p>").text(topic.title.toUpperCase());
                $(selectImage).attr('src', topic.images.fixed_height_still.url);
                $(selectImage).attr('data-still', topic.images.fixed_height_still.url);
                $(selectImage).attr('data-animate', topic.images.fixed_height.url);
                $(selectImage).attr('data-state', 'still');
                $(selectImage).addClass("gif");
                $(sportDiv).append(selectImage, title, rating);
                // $(sportDiv).append(selectImage);
                $("#display-gif").prepend(sportDiv);


                // for (var i = 0; i < topic.length; i++) {
                //     var sportDiv = $("<div class='card border-dark mb-5' style='width: 20rem'>");
                //     var selectImage = $("<img>");
                //     var rating = $("<p>").text("Rating: " + topic[i].rating.toUpperCase());
                //     var title = $("<p>").text(topic[i].title.toUpperCase());
                //     $(selectImage).attr('src', topic[i].images.fixed_height_still.url);
                //     $(selectImage).attr('data-still', topic[i].images.fixed_height_still.url);
                //     $(selectImage).attr('data-animate', topic[i].images.fixed_height.url);
                //     $(selectImage).attr('data-state', 'still');
                //     $(selectImage).addClass("gif");

                //     $(sportDiv).append(selectImage, title, rating);
                //     // $(sportDiv).append(selectImage);
                //     $("#display-gif").prepend(sportDiv);
                // }
            });
        }

    }

    // animation control
    $(document).on("click", ".gif", function () {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    // display array as buttons on the page
    function addButton() {

        $("#buttons-display").empty();
        for (var i = 0; i < topics.length; i++) {
            var sportDiv = $("<button>");
            sportDiv.addClass("newSport");
            sportDiv.attr("type-sports", topics[i]);
            sportDiv.text(topics[i]);
            $("#buttons-display").append(sportDiv);
        }
    }

    $("#add-sport").on("click", function (event) {
        event.preventDefault();
        var sports = $("#gif-buttons").val().trim();
        topics.push(sports);
        console.log(sports);
        addButton();
        $("#gif-form")[0].reset();
    });
    // adds new button to the array
    $(document).on("click", ".newSport", displayGif);
    addButton();
});
