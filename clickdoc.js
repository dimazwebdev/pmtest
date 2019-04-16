$(document).ready( function(){
  $(".resume__text___head").one('click', function(){ 
  $(".form__resume__form").append('<span class="resume__form___nameuser___input___other"><input type = "text"  name = "firstname" value =  "Хобби"></span>');
     });

   $(".resume__text___head").one('dblclick', function(){	   
      // Действия на отсутствие пользователя
	  $("span.resume__form___nameuser___input___other").last().detach();
	  $(".form__resume__form").append('<img src="man.jpg" class="jsimg">');
	  setTimeout(function() {location.reload();}, 5000);

    });
	


  
});// не трогай