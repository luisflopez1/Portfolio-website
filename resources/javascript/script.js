
let text = document.getElementById('main-text')
let bio = document.getElementById('bio')
let profile = document.getElementById('profile')
let screen = document.getElementById('screen')

//folders
let paintings = document.getElementById('paintings')
let editing = document.getElementById('editing')
let brand = document.getElementById('brand')
let silmar = document.getElementById('silmar')


let info = document.getElementById('info')


var i = 0;
var txt = 'You need an Artist?\nGraphic Designer?\nWeb Developer?';
var speed = 100;

document.onload = typeWriter();

function typeWriter() {
  if (i < txt.length) {
    text.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


const myScrollFunc = () => {
  var y = window.scrollY;
  if (y <= 1200) {
    text.style.display = "block"
    bio.style.display = "none"
    profile.style.display = "none"
  } else {
    text.style.display = "none"
    bio.style.display = "block"
    
  }
};

//paintings folder

paintings.onmouseover = function(){
  screen.style.backgroundImage = " url(./resources/images/test.gif)";
  screen.style.opacity = "1";
  screen.style.backgroundSize = "contain";
  screen.style.backgroundColor = "rgba(255, 255, 255, .10)";
  screen.style.backgroundPosition = "center";
  screen.style.backdropFilter = "blur(8px)"
  info.innerHTML = "File found: Portrait Paintings"
};

paintings.onmouseout = function(){
  screen.style.backgroundImage = "";
  screen.style.opacity = "";
  screen.style.backgroundSize = "";
  info.innerHTML = "Locating  file . . . "
};

//editing folder

editing.onmouseover = function(){
  screen.style.backgroundImage = " url(./resources/images/photoediting.gif)";
  screen.style.opacity = "1";
  screen.style.backgroundSize = "contain";
  screen.style.backgroundColor = "rgba(255, 255, 255, .10)";
  screen.style.backgroundPosition = "center";
  screen.style.backdropFilter = "blur(8px)"
  info.innerHTML = "File found: Photo Editing"
};

editing.onmouseout = function(){
  screen.style.backgroundImage = "";
  screen.style.opacity = "";
  screen.style.backgroundSize = "";
  info.innerHTML = "Locating  file . . . "
};

//brand identity folder

brand.onmouseover = function(){
  screen.style.backgroundImage = " url(./resources/images/brandidentity.gif)";
  screen.style.opacity = "1";
  screen.style.backgroundSize = "contain";
  screen.style.backgroundColor = "rgba(255, 255, 255, .10)";
  screen.style.backgroundPosition = "center";
  screen.style.backdropFilter = "blur(8px)"
  info.innerHTML = "File found: Brand Identity"
};

brand.onmouseout = function(){
  screen.style.backgroundImage = "";
  screen.style.opacity = "";
  screen.style.backgroundSize = "";
  info.innerHTML = "Locating  file . . . "
};

//silmar folder

silmar.onmouseover = function(){
  screen.style.backgroundImage = " url(./resources/images/silmar.gif)";
  screen.style.opacity = "1";
  screen.style.backgroundSize = "contain";
  screen.style.backgroundColor = "rgba(255, 255, 255, .10)";
  screen.style.backgroundPosition = "center";
  screen.style.backdropFilter = "blur(8px)"
  info.innerHTML = "File found: Silmar Painting LLC"
};

silmar.onmouseout = function(){
  screen.style.backgroundImage = "";
  screen.style.opacity = "";
  screen.style.backgroundSize = "";
  info.innerHTML = "Locating  file . . . "
};

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      profile.style.display = "block";
    }
};

window.addEventListener("scroll", myScrollFunc);
