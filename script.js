window.addEventListener('load', function() {
  var upload = document.getElementById('uploadInput');
  
  // Make sure the DOM element exists
  if (upload) 
  {
    upload.addEventListener('change', function() {
      // Make sure a file was selected
      if (upload.files.length > 0) 
      {
        var reader = new FileReader(); // File reader to read the file 
        
        // This event listener will happen when the reader has read the file
        reader.addEventListener('load', function() {
          var result = JSON.parse(reader.result); // Parse the result into an object 
          
          console.log(result);
          console.log(result.birthDate);

          document.getElementById("Name").innerHTML = "None Specified";
          document.getElementById("Org").innerHTML = "None Specified";
          document.getElementById("Gen").innerHTML = "None Specified";
          document.getElementById("numCon").innerHTML = "None Specified";
          var  allCond = result.conditions
          document.getElementById("Cond").innerHTML = "None Specified";



          document.getElementById("Name").innerHTML = result.identifier.name.given + " " + result.identifier.name.family;
          document.getElementById("Org").innerHTML = result.managingOrganization.display;
          document.getElementById("Gen").innerHTML = result.gender;
          document.getElementById("numCon").innerHTML = result.conditions.length;
          var  allCond = result.conditions
          document.getElementById("Cond").innerHTML = '<ul><li>' + allCond.join("</li><li>"); + '</li></ul>';        //console.log(result.age);
          //console.log(result.occupation);
        });
        
        reader.readAsText(upload.files[0]); // Read the uploaded file
      }
    });
  }
});	    