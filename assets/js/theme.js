// Show navigation active item
var btnContainer = document.getElementsByClassName("menu-item-list");
var btns = btnContainer[0].getElementsByClassName("menu-item");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
}

// Show selected language
var lngContainer = document.getElementsByClassName("lng-select");
var lngs = lngContainer[0].getElementsByClassName("lng");

for (var i = 0; i < lngs.length; i++) {
  lngs[i].addEventListener("click", function() {
    var cur = document.getElementsByClassName("selected");

    if (cur.length > 0) {
      cur[0].className = cur[0].className.replace(" selected", "");
    }

    this.className += " selected";
    // this.parentNode.insertBefore(this, lngs[0]);
  });
}

// Mobile navigation overlay open/close
var menu = document.getElementsByClassName("menu-items");
var btnOpen = document.getElementsByClassName("nav-open-btn");
var btnClose = document.getElementsByClassName("nav-close-btn");
var body = document.getElementsByTagName("BODY")[0];

function openNav() {
  for (var i=0;i<menu.length;i+=1){
    menu[i].style.display = 'block';
  }

  btnClose[0].style.display = 'block';
  btnOpen[0].style.display = 'none';

  body.style.overflow = 'hidden';
}

function closeNav() {
  for (var i=0;i<menu.length;i+=1){
    menu[i].style.display = 'none';
  }
  btnClose[0].style.display = "none";
  btnOpen[0].style.display = 'block';

  body.style.overflow = 'visible';
}

// Button functions

function goToSapnotajiem(){

}

function goToUznemejiem(){
  
}

function submit(){
  
}



