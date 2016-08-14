
$("#polje_za_pretragu").keyup(function(){
	// focus on search field; keyup waits that somebody types something. When somebody types then JSON will be called.
    
$.getJSON('podaci.json', function(podaci){
    
	// we keep datas in podaci variable which user enters in search field
    var termin_za_pretragu = $("#trazi").val(); // val() gathers from input field
    //console.log(termin_za_pretragu);
    // we transformed gather information in Regular expression because of better processing
    
    var moj_regularni_izraz = new RegExp(termin_za_pretragu,'i');  // object;  i is case insensitive
    //console.log(moj_regularni_izraz);
    
	// it shows only datas which are in relation to typed termine:
    var stm = "<ul class='rezultat_pretrage'>";
    $.each(podaci,function(kljuc,vrednost){
       
		//search command is part of jquery syntax and it searchs that is typed termine inside moj_regularni_izraz
        if((vrednost.naziv.search(moj_regularni_izraz)!=-1)||(vrednost.opis.search(moj_regularni_izraz)!=-1)){
            
            stm+="<li>";
            stm+="<h2>"+vrednost.naziv+"</h2>";
            stm+="<img src = 'slike/"+vrednost.naziv+"_mala_slika.png'"+"/>";
            stm+="<p>"+vrednost.opis+"</p>";
            stm+="</li>";
        
        }
    });
    stm+="</ul>";
    $("#dole").html(stm);
    
});
    
    });