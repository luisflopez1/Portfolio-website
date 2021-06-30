
let text = document.getElementById('main-text')
let bio = document.getElementById('bio')
let profile = document.getElementById('profile')


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

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      profile.style.display = "block";
    }
};

window.addEventListener("scroll", myScrollFunc);