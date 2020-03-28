$(document).ready(function() {
  $("#word-input").on("keypress", function(event) {
    if (event.which === 13) {
      event.preventDefault();
      $("#def-coll").empty();
      

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
        var el = response;

        // Access the sound URL from the API
        var audio_link = `https://media.merriam-webster.com/soundc11/${wordSearch[0]}/${el[0].hwi.prs[0].sound.audio}.wav`;

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
                `<h5 class="card-title">${i + 1}. ${wordSearch}</h5>`
              );

              $("#def-coll").append(
                // `<audio controls><source src="${audio_link}" type="audio/wav"><i class="fas fa-volume-up"></i></audio>`
                `<i data-sound=${audio_link} class="fas fa-volume-up sound"></i>`
              );

              $("#def-coll").append(
                `<p class="card-text">${el[i].shortdef[0]}</p>`
              );
            }
          }
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
