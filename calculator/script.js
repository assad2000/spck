let expression = '';
input = document.getElementById('result');
body = document.querySelector('body');
button = document.getElementsByTagName('button');
b = document.getElementsByClassName('b');
c = document.querySelector('.c')
t = document.querySelector('.t');



function appendNumber(number) {
  expression += number;
  updateResult();
}

function appendOperator(operator) {
  expression += operator;
  updateResult();
}

function clearResult() {
  expression = '';
  updateResult();
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    updateResult();
  } catch (error) {
    expression = 'Error';
    updateResult();
  }
}

function updateResult() {
  
  console.clear();
  
  value = expression;
  if (value == '') {
    input.value = value;
  }
  
  if (value != parseInt(value) && value != '') {
    str = parseInt(value);
    strk = dute(str);
    op = value.replace(str,'');
    nValue = op.replace(op[0],'');
    if (nValue == '') {
      value = strk+op[0];
      input.value = value;
    }else if (nValue == parseInt(nValue)) {
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
  
  
}
time = new Date();
time = time.getHours();
nightTime = time >= 19 || time < 7;
if (nightTime) {
  body.style.background='#000';
  input.style.background='#000';
  input.style.color='#fff';
  for (var i = 0; i < button.length; i++) {
    button[i].style.background='#252524';
    button[i].style.color='#fff';
  }
  for (var i = 0; i < b.length; i++) {
    b[i].style.color='green';
  }
  c.style.color='red';
  t.style.background='green';
}



