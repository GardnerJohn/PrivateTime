/* W3Data ver 1.31 by W3Schools.com */
function w3IncludeHTML(cb) {
  let z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          elmnt.innerHTML = this.responseText;
          elmnt.removeAttribute("w3-include-html");
          w3IncludeHTML(cb);
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }

  // Sticky-top for import
  document.querySelector('#homeNav').classList.add('active');
  
  // Login Modal
  $("#loginButton").click(function () {
    $("#loginModal").modal("show");
  });

  //Change background in input text box
  $('input').focus(function() {
    $(this).css({'background-color' : 'lightyellow'});
  });
  $('input').blur(function() {
    $(this).css(({'background-color' : 'white'}));
  });
  
}