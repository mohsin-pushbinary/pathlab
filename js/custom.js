
// // Add active class to the current button (highlight it)
// var header = document.getElementById("myDIV");
// var btns = header.getElementsByClassName("gender");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("genactive");
//   current[0].className = current[0].className.replace(" genactive", "");
//   this.className += " genactive";
//   });
// }
function checkgender(){
    var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("gender");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("genactive");
  current[0].className = current[0].className.replace(" genactive", "");
  this.className += " genactive";
  });
}
}
