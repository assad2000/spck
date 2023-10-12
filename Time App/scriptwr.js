let word = setInterval(function (){timeWord()},1000);
function timeWord () {
  d = new Date();
  document.getElementById('re').innerHTML = d.toLocaleTimeString().slice(0,8);
  document.getElementById('se').innerHTML = d.toTimeString().slice(9,13)+d.toTimeString().slice(26,31);
}
timeWord();
let menuW = document.querySelector('#menu-w'),
butMenu = document.querySelector('.menu');

document.addEventListener('click', function(event){
  console.log(1);
  if (event.target === menuW && (butMenu.style.display == '' || butMenu.style.display == 'none')) {
    butMenu.style.display = 'block';
    setTimeout(function(){
      butMenu.style.opacity = '1';
      butMenu.style.transform = 'scale(1)';
    }, 10)
  } else {
    butMenu.style.opacity = '0';
    butMenu.style.transform = 'scale(0.8)';
    setTimeout(function(){
      butMenu.style.display = 'none';
    }, 300)
  }
});
