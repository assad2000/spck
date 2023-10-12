input = document.querySelector('input');

input.addEventListener('input', function() {
  console.clear();
  value = input.value;
  value = value.replace(/,/g,'');
  
  if (value != parseInt(value)) {
    str = parseInt(value);
    strk = dute(str);
    op = value.replace(str,'');
    nValue = op.replace(op[0],'');
    if (nValue == parseInt(nValue)) {
      nValue = dute(nValue);
      value = strk+op[0]+nValue;
      input.value = value;
    }
  } else if (value == parseInt(value)) {
    value = dute(value);
    input.value = value;
  }

  
  function dute(value) {
    value = parseInt(value);
    value = value.toLocaleString();
    value = value.replace(/\./g,',');
    return value;
  }
  
  
  
  
  /*valueIn = '';
  valueDt = '';
  for (var i = 0; i < value.length; i++) {
    if (value[i] != ',') {
      valueIn += parseInt(value[i])
    }
  }
  console.log(valueIn);
  value = parseInt(valueIn);
  value = value.toLocaleString();
  console.log(value);
  
  for (var i = 0; i < value.length; i++) {
    if (value[i] == '.') {
      valueDt += ',';
    } else if (value[i] != '.') {
      valueDt += value[i];
    }
  }
  console.log(valueDt);
  
  
  input.value = valueDt;*/
})

//------------odio ricored---------

var recordButton = document.getElementById("recordButton");
var stopRButton = document.getElementById("stoprButton");
var recordedAudio = document.getElementById("recordedAudio");
var mediaRecorder;
var chunks = [];
console.log(stopRButton);
recordButton.addEventListener("click", startRecording);
stopRButton.addEventListener("click", stopRecording);

function startRecording() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.start();

      mediaRecorder.addEventListener("dataavailable", function(event) {
        chunks.push(event.data);
      });
    });
}

function stopRecording() {
  mediaRecorder.stop();

  mediaRecorder.addEventListener("stop", function() {
    var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
    chunks = [];

    recordedAudio.src = URL.createObjectURL(blob);
  });
}




//-----------time------------------

var timerElement = document.getElementById("timer");
var startBUtton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");
var timerInterval;
var time = 0;
console.log(startBUtton);
startBUtton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);

function startTimer() {
  alert('k')
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  time = 0;
  updateTimer();
}

function updateTimer() {
  time++;
  timerElement.textContent = time;
}
window.print('g');
function mode() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      alert('dark')
    } else {
      alert('light')
    }
}
isScroll = false;
window.addEventListener('scroll', function() {
  isScroll = true;
  touch();
});

function touch () {
  window.addEventListener('touchend', function() {
    if (isScroll) {
      mode();
    }
    isScroll = false;
  })
}
