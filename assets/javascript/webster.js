// $(".input-group-prepend").click(function (event) {

//     event.preventDefault();
//     $(this).remove(".card-title");
//     $(this).remove(".card-text")

//     var wordSearch = $(".form-control").val().trim();

    // My API key: 56e8e2c7-0a6a-4cc2-8060-7e81c4e3e03
    var queryURL = "https://www.dictionaryapi.com/api/v3/references/learners/json/" + wordSearch + "?key=56e8e2c7-0a6a-4cc2-8060-7e81c4e3e038";
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
       
    })
// })