//Attraverso una chiamata ajax all’API di boolean avremo
//a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.


$(document).ready(function() {
//setto il template di handlebars preparato in HTML
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
// chiamata AJAX, creo una variabile album=risposta API
// per poi accedere con un'altra var ai suoi attributi.
//
    $.ajax (
        {
            url: "https://flynn.boolean.careers/exercises/api/array/music",
            method: "GET",
            success: function(album){
                var album = album.response;
//con un ciclo do ad item gli attributi di album e li stampo sui
//template di Handlebars
                for (var i = 0; i < album.length; i++) {

                    var item = {
                        "poster" : album[i].poster,
                        "titolo" : album[i].title,
                        "autore" : album[i].author,
                        "anno" : album[i].year,
                        "genere" : album[i].genre
                    }
                    var html = template(item);
                    $(".cds-container").append(html);
                }
            }
        }
    )
});
