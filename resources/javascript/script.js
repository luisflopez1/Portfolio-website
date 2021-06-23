
let text = document.getElementById('main-text')
let bio = document.getElementById('bio')


const myScrollFunc = () => {
  var y = window.scrollY;
  if (y <= 800) {
    text.style.display = "block"
    bio.style.display = "none"
  } else {
    text.style.display = "none"
    bio.style.display = "block"
  }
};

window.addEventListener("scroll", myScrollFunc);