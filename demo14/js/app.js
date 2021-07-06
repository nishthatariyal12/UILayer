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
    const firstName=$("#firstName").val();
    // check for firstName
    // error for firstName
    // check for lastName
    // error messages lname


    
   
    if(firstName==undefined ||firstName.length==0){
        $("#fname_err").text("First Name required!");
        flag=1;
    }
    
    const lastName=$("#lastName").val();    
    if(lastName==undefined ||lastName.length==0){
        $("#lname_err").text("Last Name required!");
        flag=1;
    }  

    const Email=$("#Email").val();    
    if(Email==undefined ||Email.length==0){
        $("#email_err").text("email required!");
        flag=1;
    }  
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