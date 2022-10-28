function buttonClickGET() {

    var text = document.getElementById("text_recherche").value;
    var url="https://api.themoviedb.org/3/search/movie?api_key=8d8e03e51a40a4c21ae692f6dc9b6508&language=en-US&query="+text+"&language=en-US&page=1&include_adult=false";
 //alert(url);
 $.get(url, callBackGetSuccess).done(function() {
    //alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    //alert( "finished" );
  });

}

var callBackGetSuccess = function(data) {
    var element = document.getElementById("film");
    var list_film=data.results;
    const films=document.createElement('div');
    films.className="film";


    for(var i=0;i<20;i++){
        var film=list_film[i];

        const div = document.createElement('div');
        div.className="case_film"
        
        const div_titre=document.createElement('div');
        div_titre.className="titre_film";
        div_titre.textContent=film.original_title;
        
        const br=document.createElement('br');

        const div_resume=document.createElement('div');
        div_resume.className="resume";
        div_resume.textContent=film.overview;
        
        div.appendChild(div_titre);
        div.appendChild(br);
        div.appendChild(div_resume);
        
        
        
        films.appendChild(div);
    }
    document.body.append(films);
}