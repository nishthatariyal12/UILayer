// const languages = new Array();
// const ul = document.createElement("ul");
// function onClick(event) {
//     const language = document.getElementById("language").value;
//     languages.push(language);
//     console.log(languages);
//     updateList(languages.length-1);
// }

// function updateList(i){
//     const li = document.createElement("li");// step2
//     li.innerText = languages[i];//step 3
//     ul.appendChild(li);//step 4    
// // // //5.append Ul on index.html
//     const root=document.getElementById("root");
//     root.appendChild(ul);
// }

const languages = new Array();

$(document).ready(function() {
  $('#target').click(function() {
      var content = $('#language').val();
      languages.push(content)
      console.log(languages);
      if (typeof(Storage)!=="undefined"){
        localStorage.setItem(languages.length,content);
      }
          
            
      $('#root').append("<ul><li>"+content+"</li></ul>");
  })
})
