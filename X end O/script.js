const listTab = document.querySelectorAll(".tab > div");
const towplayer = document.querySelectorAll(".players > div");
const winner = document.querySelector('.winner');
const prg = document.querySelector('.winner > p');
let p = 1;
let x = 1;
let o = 1;
//const arrTab = Array.from(listTab);
let divarray = [];

for (var i = 0; i < listTab.length; i++) {
  listTab[i].name = i;
}



listTab.forEach((div) => {
  div.addEventListener("click", (e) => {
    //victory(div);
    unclick(div);
    
  });
});

function player(div){
  if (p==1) {
    div.innerHTML='X';
    div.style.fontSize='95px';
    div.style.color = 'red';
    let a = setTimeout(ifVictory(p),30000);
    p=0
  } else {
    div.innerHTML='O';
    div.style.fontSize='95px';
    div.style.color = 'green';
    let b = setTimeout(ifVictory(p),30000);
    p=1
  }
  endPlace();
}


function unclick(div) {
  i = div.name;
  bool = divarray.indexOf(i);
  console.log(bool);
  if (bool == -1) {
    divarray[i] = i;
    victory(div,i);
  }else{
    alert('Not available')
  }
}
function victory(div,i) {
  //console.log(i);
  if (p==1) {
    divarray[i+9]= 'x';
  }else if (p==0) {
    divarray[i+9]='o';
  }
  
  //ifVictory(p);
  player(div);
}

function ifVictory(p) {
  if (p==1) {
    i= i+9;
    j='xxx';
  } else if (p==0) {
    i= i+9;
    j='ooo';
  }
  
  
  
  for (s = 0; s < 9; s=s+3) {
    arr = divarray.slice(9+s,9+3+s).join('');
    ifned(arr, j);
  }
  for (s = 0; s <=2; s++) {
    arr = divarray[9+s]+divarray[9+3+s]+divarray[9+s+6]
    ifned(arr,j);
  }
  for (s = 0; s <=2; s=s+2) {
    arr = divarray[9+s]+divarray[13]+divarray[17-s]
    ifned(arr,j,p);
    
  }
}
function ifned(arr, j,p) {
  if (arr == j) {
    if (j == 'xxx') {
      towplayer[0].innerHTML=x;
      x++;
    } else {
      towplayer[1].innerHTML=o;
      o++
    }
    endgame(p);
  }
}
function endPlace () {
  if (divarray.slice(0,9).join() == [0,1,2,3,4,5,6,7,8].join()) {
    endgame();
  }
}
function endgame(p) {
  divarray = [];
  for (var s = 0; s < listTab.length; s++) {
    listTab[s].innerHTML='';
  }
  /*winner.style.display = 'block';
  if (p==1) {
    winner.innerHTML = 'X';
  } else {
    winner.textContent = 'O';
  }*/
  //window.location.reload();
  //alert('yes')
}