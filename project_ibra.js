window.onscroll = function showHeader(){
    var head = document.querySelector('.header');
    if(window.pageYOffset > 200){
        head.classList.add('header_fixed');
    }
}