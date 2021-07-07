$(document).ready(function(){
    $("span").text(" ");
    
    $("#submit").click(function(){
        
        const isValidated=formValidation();
        if(isValidated){
            
            return true;
        }else{            
            return false;
        }
    });
   
    function formValidation(){
        let flag=0;
         if ($("#gender:selected").length == 0){
        $("#gender_err").text("gender required!");
        flag = 1;
    }
    if ($("#course:checked").length == 0){
        $("#course_err").text("course is required");
        flag = 1;
        }

    if (flag){
        return false
    }
    else{
        return true
    }
   } 
});





function handleFormSubmit(event) {
  event.preventDefault();
  
  const data = new FormData(event.target);
  
  const formJSON = Object.fromEntries(data.entries());

  formJSON.course = data.getAll('course');


 console.log(JSON.stringify(formJSON));
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', handleFormSubmit);