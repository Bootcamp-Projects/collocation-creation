$(document).ready(function() {
    
    // collocation API js code
    var pronSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://linguatools-english-collocations.p.rapidapi.com/bolls/?lang=en&query=change",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "linguatools-english-collocations.p.rapidapi.com",
            "x-rapidapi-key": "d3749e9e16msh9f34dc06d606f25p158454jsn2925b80b7492"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });



})