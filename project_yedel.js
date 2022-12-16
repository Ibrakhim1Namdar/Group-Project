
window.onscroll = function showHeader(){
    var head = document.querySelector('.header');
    if(window.pageYOffset > 200){
        head.classList.add('header_fixed');
    }
}

function reload(){
    document.getElementById("bl").innerHTML = "Блок-1";
    document.getElementById("bl2").innerHTML = "1 - комнатная";
    document.getElementById("bl3").innerHTML = "38.7 м²";
    document.getElementById("imgkomnata").src="https://thumb.tildacdn.com/tild3961-3634-4835-b461-363265323466/-/resize/650x/-/format/webp/387.png";

    document.getElementById("komnata_1").style.backgroundColor="#9bc58e";
    document.getElementById("komnata_1").style.color="white";

    document.getElementById("komnata_2").style.border="3px solid #9bc58e";
    document.getElementById("komnata_2").style.color="#9bc58e";
    document.getElementById("komnata_2").style.backgroundColor="white";
   
}
function reload2(){
    document.getElementById("bl").innerHTML = "Блок-3";
    document.getElementById("bl2").innerHTML = "2 - комнатная";
    document.getElementById("bl3").innerHTML = "56.6 м²";
    document.getElementById("imgkomnata").src="https://thumb.tildacdn.com/tild6563-3139-4333-b631-643063313032/-/resize/520x/-/format/webp/566.png";

    document.getElementById("komnata_2").style.backgroundColor="#9bc58e";
    document.getElementById("komnata_2").style.color="white";

    document.getElementById("komnata_1").style.border="3px solid #9bc58e";
    document.getElementById("komnata_1").style.color="#9bc58e";
    document.getElementById("komnata_1").style.backgroundColor="white";
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

