$(document).ready(function() {

  $("#word-input").on("keypress", function(event) {
    if (event.which === 13) {
      event.preventDefault();
      $("#def-coll").empty();
      $("#collocation-result").empty();
      $([document.documentElement,document.body]).animate({scrollTop: $("#collocation").offset().top}, 800);
      

      var wordSearch = $("#word-input")
        .val()
        .trim();

      // API key: 56e8e2c7-0a6a-4cc2-8060-7e81c4e3e03
      var queryURL =
        "https://www.dictionaryapi.com/api/v3/references/learners/json/" +
        wordSearch +
        "?key=137bad9b-3731-45ab-ae8c-584bd5cae8d5";

      // Ajax call for Merriam Webster API
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response)
        var el = response;
        

        // Access the sound URL from the API
        var audio_link = `https://media.merriam-webster.com/soundc11/${wordSearch[0]}/${el[0].hwi.prs[0].sound.audio}.wav`;

        // Display word searched with audio icon
        $("#def-coll").append(
          `
          <div class="word-searched">
          <h2 class="card-title">${wordSearch}</h2>
          <i data-sound=${audio_link} class="fas fa-volume-up sound"></i>
          </div>
          `
        );


        for (var i = 0; i < 4; i++) {
        
        
          // Loop through the different parts of speech
          if (
            el[i].fl === "noun" ||
            el[i].fl === "verb" ||
            el[i].fl === "adjective" ||
            el[i].fl === "adverb"
          ) {
            if (el[i].meta.stems[0] === wordSearch) {
              

              $("#def-coll").append(
                `<p class="card-text">${i + 1}. ${el[i].shortdef[0]}</p>`
              );
            }
          }
        }

        for (var i = 0; i < 10; i++) {


        };

      });

      var APIkey = "d3749e9e16msh9f34dc06d606f25p158454jsn2925b80b7492";
      var collocationQueryURL =
        "https://linguatools-english-collocations.p.rapidapi.com/bolls/?lang=en&query=" + wordSearch;
    
      $.ajax({
        url: collocationQueryURL,
        method: "GET",
        async: true,
        crossDomain: true,
        headers: {
          "x-rapidapi-host": "linguatools-english-collocations.p.rapidapi.com",
          "x-rapidapi-key": APIkey
        }

      // Adding collocations to page
      }).then(function(response) {
        console.log(response)
        for (var i = 0; i < 10; i++ ) {
          var li = $("#collocation-result").append(`<li></li>`);
        
          $(li).append(`<h5>${response[i].collocation}</h5>`);

          response[i].examples.forEach(function(val){

            $(li).append(`<p>${val}</p>`);
          })
         
        }
  
      });
    }
  });

  // Selecting document and adding onclick function targetting the id
  $(document).on("click", ".sound", function() {
    var soundURL = $(this).attr("data-sound");
    var audio = new Audio(soundURL);
    audio.play();
  });
});
