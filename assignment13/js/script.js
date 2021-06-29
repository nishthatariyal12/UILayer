
 var changecolor = function (color) {
    document.getElementById(
        "output-text").style.color
                = color.value;
}
document.getElementById('btn').onclick = function() {  
    var markedCheckbox = document.getElementsByName('font');  
    for (var checkbox of markedCheckbox) {  
      if (checkbox.checked)  
      document.getElementById(
        "output-text").style.fontFamily
                = checkbox.value;
      
    }  
  }  