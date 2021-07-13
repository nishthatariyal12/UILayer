console.log("inside script.js");

$(document).ready(function() {
    
        $('div').bind('click',function( event ){
          
            alert('Hi there!'+ event.target.innerHTML);
       
        }
        )
       $("body").css("border","2px solid blue");
  
}
)

