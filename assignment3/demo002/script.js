console.log("in javascript file");
function myFunction() {
  var txt = ""
  var obj=document.getElementById("id1");
  if (!obj.checkValidity()) {
    txt = "Invalid age";
    document.getElementById("demo").innerHTML = txt;
  }
  else{
    document.getElementById("demo").innerHTML = "valid age";
  }
 
}