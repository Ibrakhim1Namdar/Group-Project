window.onscroll = function showHeader(){
    var head = document.querySelector('.header');
    if(window.pageYOffset > 200){
        head.classList.add('header_fixed');
    }
}
function email(uname, pass){
    $("#subm").css("background-color", "grey");
    document.getElementById("subm_1").innerText = "Отправлено";
      $.ajax({
      url : 'Email.php',
      type : 'POST',
      data: {username: uname, password: pass},
      success : function (result) {
        console.log (result);
      },
      error : function () {
        console.log ('error');
      }
    });
}
/*
var menuList = document.getElementsByClassName("nav");

menuList.style.maxHeight = "0px";

function togglemenu(){
  if (menuList.style.maxHeight == "0px"){
    menuList.style.maxHeight = "150px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}*/