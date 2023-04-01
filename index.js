var darckBtn = document.getElementById("toggle");
var toggleicon = document.getElementById("toggle-icon");

var check = false;

var isAnimating = false;

darckBtn.addEventListener("click", function() {

        toggleicon.style.animation = "";

  
    check = !check;
 
if (check) {

    document.documentElement.style.setProperty('--primary-color', '#333');
    document.documentElement.style.setProperty('--secondary-color', '#FFF');



        toggleicon.style.animation = "iconanimaiton 1s linear";

}else {

  
    document.documentElement.style.setProperty('--primary-color', '#fff');
    document.documentElement.style.setProperty('--secondary-color', '#333');
    toggleicon.style.animation = "iconanimaiton 1s linear";

   
   
}


setTimeout(function() {
    toggleicon.style.animation = "";
    }, 1000);

  });


  
  


   
  