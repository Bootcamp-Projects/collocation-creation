


$(document).ready(function() {
  $(".input-group-text").on("keypress", function(event) {
    if(e.which !== 13){
      alert("please press enter")
    }

    event.preventDefault();
    $(this).remove(".card-title");
    $(this).remove(".card-text");

    var wordSearch = $(".form-control")
      .val()
      .trim();

    // My API key: 56e8e2c7-0a6a-4cc2-8060-7e81c4e3e03
    var queryURL =
      "https://www.dictionaryapi.com/api/v3/references/learners/json/" + wordSearch + "?key=137bad9b-3731-45ab-ae8c-584bd5cae8d5";
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function(response) {
      
        var el = response;
        console.log(response)
        var audio_link = `https://media.merriam-webster.com/soundc11/${wordSearch[0]}/${response[0].hwi.prs[0].sound.audio}.wav`
        console.log(audio_link)
        // First Definition
        $(".card-title").text(el[0].hwi.hw);
        // $("#nes-wordClass").text(el[0].fl);
        $(".card-text").text(el[0].shortdef[0]);

        for (var i=0; i < 4; i++){
            console.log(i)

            for (var i = 0; i < 4; i++) {
              console.log(el[i])

              if (el[i].fl == noun) {
                  
              } 
          };
        };
      
    });
  });

  


})
