$(document).ready(function() {
  $("#word-input").on("keypress", function(event) {
    if (event.which === 13) {
      event.preventDefault();
      $(this).remove(".card-title");
      $(this).remove(".fas");
      $(this).remove(".card-text");

      var wordSearch = $("#word-input")
        .val()
        .trim();

      // My API key: 56e8e2c7-0a6a-4cc2-8060-7e81c4e3e03
      var queryURL =
        "https://www.dictionaryapi.com/api/v3/references/learners/json/" +
        wordSearch +
        "?key=137bad9b-3731-45ab-ae8c-584bd5cae8d5";
      console.log(queryURL);
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var el = response;
        console.log(response);

        var audio_link = `https://media.merriam-webster.com/soundc11/${wordSearch[0]}/${el[0].hwi.prs[0].sound.audio}.wav`;
        console.log(audio_link);

        for (var i = 0; i < 4; i++) {
          console.log(el[i].fl);

          if (
            el[i].fl === "noun" ||
            el[i].fl === "verb" ||
            el[i].fl === "adjective" ||
            el[i].fl === "adverb"
          ) {
            if (el[i].meta.id === wordSearch) {
              $("#def-coll").append(
                `<h5 class="card-title">${el[i].meta.id}</h5>`
              );

              $("#def-coll").append(
                `<audio controls><source src="${audio_link}" type="audio/wav"><i class="fas fa-volume-up"></i></audio>`
              );

              $("#def-coll").append(
                `<p class="card-text">${el[i].shortdef[i]}</p>`
              );
            }
          }s
        }
        var playAudio = document.getElementById(audio_link);

        
      });
    }
  });
});
