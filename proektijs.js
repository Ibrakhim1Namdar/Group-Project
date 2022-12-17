window.onscroll = function showHeader(){
    var head = document.querySelector('.header');
    if(window.pageYOffset > 200){
        head.classList.add('header_fixed');
    }
}
function corusel(){
        document.getElementById("car").style.backgroundImage = "url('https://ww1.prweb.com/prfiles/2017/01/10/13972471/APOK%20Townhome%20Rendering%20Boca%20Raton%20Florida.jpg')";
}
function email(uname, pass){
    $("#submw").css("background-color", "grey");
    document.getElementById("subm_14w").innerText = "Отправлено";
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

  