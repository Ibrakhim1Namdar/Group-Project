window.onscroll = function showHeader(){
    var head = document.querySelector('.header');
    if(window.pageYOffset > 200){
        head.classList.add('header_fixed');
    }
}
function search(a, b, c){
  // $(".poisk1").css("display", "none");
  // $(".poisk2").css("display", "block");
    document.getElementById("poisk1").style.display = "none";
    document.getElementById("poisk2").style.display = "block";

    $.ajax({
          url : 'Back.php',
          type : 'POST',
          data: {u: a, p: b, d: c},
          success : function (result) {
            document.getElementById("res").innerHTML= result;
            console.log("Success");
          },
          error : function () {
            console.log ('error');
        }
    });
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
function again(){
  $(".poisk1").css("display", "block");
  $(".poisk2").css("display", "none")
}

