window.onscroll = function showHeader(){
    var head = document.querySelector('.header');
    if(window.pageYOffset > 200){
        head.classList.add('header_fixed');
    }
}
function search(a, b, c){
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
