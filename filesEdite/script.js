function dm() {
  const body = document.querySelector('body');
  body.classList.toggle('dark-mode');
}


  
  
dir = window.location.href;
//dir = '/';
odir = '';



function file(dir,odir) {
  
  
  h = document.querySelector('span');
  h.textContent = `${dir}`;
  
  
  fetch(dir)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const html = parser.parseFromString(data, 'text/html');
      const files = Array.from(html.getElementsByTagName('a'));
      const fileListElement = document.getElementById('fileList');
      fileListElement.innerHTML = ''; // يتم مسح القائمة الحالية
      
      files.forEach(file => {
        const fileName = decodeURIComponent(file.href.split(dir).pop());
  
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        const local = 'http://localhost:7700/';
        console.log('dir '+dir);
        console.log('dir local '+local+dir);
        console.log('odir '+odir);
        if (fileName == local || fileName == dir || fileName == odir) {
          link.textContent = 'Home';
          link.addEventListener('click', function() {
            home();
          })
        }else if (fileName.includes('.')) {
          link.href = dir + fileName;
          link.textContent = fileName;
          link.download = fileName;
        } else if (!fileName.includes('.')) {
          link.textContent = fileName;
          link.addEventListener('click', function() {
            folder(fileName);
          });
        }
        
        listItem.addEventListener("click", ()=>{
          link.click();
          
        });

        listItem.appendChild(link);
        fileListElement.appendChild(listItem);
        
        function folder(nameFolder) {
          fred(dir + nameFolder,dir);
        }
      });
    });
}




function home () {
  file('http://localhost:7700/');
}


function fred(link,odir) {
  file(link,odir);
}

function test() {
  
}
file(dir,odir);

