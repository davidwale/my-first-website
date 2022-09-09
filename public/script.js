var i = 0;


var txt = "David Oyewale";


var speed = 190; 

function typeWriter() {

  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
  }
    setTimeout(typeWriter, speed);
  }
  
 