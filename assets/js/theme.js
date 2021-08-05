// Show navigation active item
var btnContainer = document.getElementsByClassName("menu-item-list");
var btns = btnContainer[0].getElementsByClassName("menu-item");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("js-active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" js-active", "");
    }

    this.className += " js-active";
  });
}

// Show selected language
var lngContainer = document.getElementsByClassName("lng-select");
var lngs = lngContainer[0].getElementsByClassName("lng");

for (var i = 0; i < lngs.length; i++) {
  lngs[i].addEventListener("click", function() {

    var cur = document.getElementsByClassName("js-selected");

    if (cur.length > 0) {
      cur[0].className = cur[0].className.replace(" js-selected", "");
    }

    this.className += " js-selected";
    // this.parentNode.insertBefore(this, lngs[0]);
  });
}

// Mobile navigation overlay open/close
var menu = document.getElementsByClassName("menu-items");
var btnOpen = document.getElementsByClassName("nav-open-btn");
var btnClose = document.getElementsByClassName("nav-close-btn");
var body = document.body;

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

// Scroll to top

mybutton = document.getElementsByClassName("scroll-up")[0];
footer = document.getElementsByClassName("footer")[0];

window.onscroll = function() {scrollFunction()};

var top = mybutton.offsetTop;
var footerTop = footer.offsetTop;
var btnHeight = mybutton.offsetHeight;
var maxy = footerTop - btnHeight;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';

    //Stop before footer function - not working properly

    // if (top > maxy) {
    //   if(!mybutton.classList.contains('js-sticky')) {
    //     mybutton.classList.add('js-sticky');
    //   }
    // } else {
    //   mybutton.classList.remove('js-sticky');
    // }

  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function playVideo(){
  var video = document.getElementsByClassName("video-overlay")[0];
  var vid = document.getElementsByClassName("video")[0];

  if (video.classList.contains("closed")) {
    video.className = video.className.replace(" closed", " show");
    body.style.overflow = 'hidden';
  } else {
    video.className = video.className.replace(" show", " closed");
    body.style.overflow = 'visible';
  }
}

// Button functions

function goToSapnotajiem(){

}

function goToUznemejiem(){
  
}

function submit(){
  
}