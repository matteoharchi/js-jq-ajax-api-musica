$(document).ready(function() {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    $.ajax (
        {
            url: "https://flynn.boolean.careers/exercises/api/array/music",
            method: "GET",
            success: function(album){
                var album = album.response;
                for (var i = 0; i < album.length; i++) {

                    var item = {
                        "poster" : album[i].poster,
                        "titolo" : album[i].title,
                        "autore" : album[i].author,
                        "anno" : album[i].year,
                        "genere" : album[i].genre
                    }
                    console.log(album[i]);

                    var html = template(item);
                    $(".cds-container").append(html);
                }
            }
        }
    )
});
