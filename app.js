const togglebtn = document.querySelector('#mytoggle');
const video =document.querySelector('#myBackgroundVedio');
const loader = document.querySelector('.loader');
loader.style.display ='block'





togglebtn.addEventListener('change',()=>{

 if(togglebtn.checked){
    video.play();
 }
 else{
    video.pause();
 }

})
// work for loader 
window.addEventListener('load', function () {
    loader.style.display = 'none';
  });

  setTimeout(function() {
    preloader.style.display = 'none';
  }, 1000);

