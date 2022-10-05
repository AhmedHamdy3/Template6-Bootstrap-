let navbar=document.querySelector(".navbar");
window.onscroll = function(){
    if(window.scrollY > 0 ){
        navbar.classList.add("bg-light")
    }
    else{
        navbar.classList.remove("bg-light")
    }
}