var $ =document;
const menuburger=$.querySelector('.menu-burger');
const list=$.querySelector('.list');
var bool=true

menuburger.addEventListener('click',()=>{
    if (bool==true){
        menuburger.classList.add('open');
        list.style.top=0;
        bool=false;
    
    }
    else{
        menuburger.classList.remove('open');
        list.style.top='-10%';
        bool=true;
    }
})

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
 