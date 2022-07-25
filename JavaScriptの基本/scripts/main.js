let myButton = document.querySelector('button');
let myHeading2 = document.querySelector('h2');

function setUserName() {
    let myName = prompt('あなたの名前を入力してください。');
    if(!myName) {
      setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading2.textContent = 'Welcome to my Website, ' + myName + '. :)';
    }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading2.innerHTML = 'Welcome to my Website, ' + storedName;
}
  myButton.onclick = function() {
    setUserName();
  }


  let myImage= document.querySelector('img');
  myImage.onclick = function(){
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/MyTestImage.jfif'){
    myImage.setAttribute('src','images/MyTestImage2.jpg');
  }else{
    myImage.setAttribute('src','images/MyTestImage.jfif');

  }
}