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
    const firstName=$("#firstName").val();
    // check for firstName
    // error for firstName
    // check for lastName
    // error messages lname
    let flag=0;
    if(firstName==undefined ||firstName.length==0){
        $("#fname_err").text("First Name required!");
        flag=1;
    }
    
    const lastName=$("#lastName").val();    
    if(lastName==undefined ||lastName.length==0){
        $("#lname_err").text("Last Name required!");
        flag=1;
    }   

    if (flag){
        return false
    }
    else{
        return true
    }
   } 
});