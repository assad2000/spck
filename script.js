let scrollDoc = document.getElementById('scroll');
var isScrolling = false;
var isScroll = false;
function smoothScrollTo(targetY, duration) {
  if (isScrolling) return;
  var startY = window.scrollY;
  var currentTime = 0;
  var increment = 20;
  var animateScroll = function() {
    currentTime += increment;
    var easing = Math.easeInOutQuad(currentTime, startY, targetY - startY, duration);
    window.scrollTo(0, easing);
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      isScrolling = false;
    }
  };
  isScrolling = true;
  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

function opacityEvent (){
  var opacity = 1 - (scrollY / 180);
  document.querySelector('.a').style.opacity = opacity;
}

function scrollEvent () {
  var scrollY = window.scrollY;

  console.log();    
  if (scrollY > 0 && scrollY <= 15) {
    smoothScrollTo(0, 300);
  } else if (scrollY > 15 && scrollY < 100) {
    smoothScrollTo(200, 1000);
  } else if (scrollY > 100 && scrollY < 180) {
    smoothScrollTo(0, 1000);
  } else if (scrollY >= 180 && scrollY < 200) {
    smoothScrollTo(200, 300);
  }
}

window.addEventListener('scroll', function() {
  scrollDoc.textContent = `${scrollY}||${1 - (scrollY / 200)}`;
  opacityEvent();
  isScroll = true;
  touch();
});

function touch () {
  window.addEventListener('touchend', function() {
    if (isScroll) {
      scrollEvent();
    }
    isScroll = false;
  })
}


