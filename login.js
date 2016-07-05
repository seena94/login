var users = [
      { "Username":"lekshmi",
        "Password":"qburst"
      },
      { "Username":"seena",
        "Password":"rit"
      },
      { "Username":"ann",
        "Password":"trainee"
      }
];

function Validate() {
       var a=document.getElementById("txtuser").value;
       var b=document.getElementById("txtpassword").value;
       var flag="false";
	   for (var i = 0; i <users.length;i++)
	   {
	      if (a==users[i].Username && b==users[i].Password)
	      
	      {
	      	flag="true";
	      }
	    }
	      if (flag=="true")
	      {
	      	alert("correct");
	      	
	      } 
	      else {
	   	  alert("wrong");
	   	  } 
	   	  
     }