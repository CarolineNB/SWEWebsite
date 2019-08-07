var prevScrollpos = window.pageYOffset;




window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos >= "525"){
    document.getElementById("navbar").className = "solid";
  }
  else{
    document.getElementById("navbar").className = "transparent";
  }

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
