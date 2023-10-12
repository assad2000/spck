const form = document.querySelector('form'),
fileInput = form.querySelector('.file-input');

form.addEventListener("click", ()=>{
  fileInput.click();
});
fileInput.onchange = ({target}) =>{
  let file = target.files[0];
  if (file) {
    let fileName = file.name;
    uploadFile(fileName);
  }
}


function uploadFile() {
  
}