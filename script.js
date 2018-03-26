$(document).ready(function() {
    $("#display").on("click", function(){
        var artist = $("#artist").val();
        var limit = $("#result").val();
        $.ajax({
            url: "https://itunes.apple.com/search?term="+ artist + "&limit=" + limit,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                displayResults(result);
            },
            error: function() { alert('Failed!'); }
        });
    });
});
function displayResults(json){
    console.log(json);
    var listOutput = "<table border = 1>";
    listOutput += "<td>" + "Album Name" + "</td>";
    listOutput += "<td>" + "Song Name" + "</td>";
    listOutput += "<td>" + "Artist" + "</td>";
    listOutput += "<td>" + "Album Cover" + "</td>";
    listOutput += "<td>" + "Explicitness" + "</td>";
    listOutput += "<td>" + "Album Price" + "</td>";
    listOutput += "<td>" + "Song Preview" + "</td>";
    listOutput += "<td>" + "Genre" + "</td>";
    for (var i = 0; i <json.results.length; i++){
        listOutput += "<tr>";
        listOutput += "<td>" + "More about: " + "<a class ='link' href ='" + json.results[i].collectionViewUrl + "' target='_blank'>" + json.results[i].collectionName + "</a>" + "</td>";
        listOutput += "<td>" + json.results[i].trackName + "</td>";
        listOutput += "<td>" + "All about: " + "<a class ='link' href ='" + 'https://en.wikipedia.org/wiki/' + json.results[i].artistName.split(",", json.results[i].artistName.length) + "' target='_blank'>" +  json.results[i].artistName + "</a>" + "</td>";
        listOutput += "<td>" + "<img class ='pics' src='" + json.results[i].artworkUrl100 + "'>" + "</td>";
        listOutput += "<td>" + json.results[i].trackExplicitness + "</td>";
        listOutput += "<td>" + "$" + json.results[i].collectionPrice + "</td>";
        listOutput += "<td>" + "<audio class ='audio' controls='true' src='" + json.results[i].previewUrl + "' id='audio' type='audio/m4a'></audio>" + "</td>";
        listOutput += "<td>" + json.results[i].primaryGenreName + "</td>";
        listOutput += "</tr>";
    }
    listOutput += "</table>";
    $("#listOutput").html(listOutput);
}


