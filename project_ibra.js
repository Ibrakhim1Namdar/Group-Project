window.onscroll = function showHeader(){
    var head = document.querySelector('.header');
    if(window.pageYOffset > 200){
        head.classList.add('header_fixed');
    }
}


function change1(id){
    if(id=='kom1'){
        document.getElementById("kom1").style.backgroundColor = "#17493c";
        document.getElementById("kom1").style.color = "white";
        document.getElementById("kom2").style.backgroundColor = "white";
        document.getElementById("kom2").style.color = "#17493c";
        document.getElementById("kom3").style.backgroundColor = "white";
        document.getElementById("kom3").style.color = "#17493c";

        document.getElementById("komnat").innerHTML = "1 - комнатная";
        document.getElementById("area").innerHTML = "35.3 м";
        document.getElementById("fl.img").src = "https://thumb.tildacdn.com/tild3537-3661-4634-b734-356238646330/-/resize/880x/-/format/webp/noroot.png";


        fade();

    }}
function change2(id){
     if(id='kom2'){
        document.getElementById("kom2").style.backgroundColor = "#17493c";
        document.getElementById("kom2").style.color = "white";
        document.getElementById("kom1").style.backgroundColor = "white";
        document.getElementById("kom1").style.color = "#17493c";
        document.getElementById("kom3").style.backgroundColor = "white";
        document.getElementById("kom3").style.color = "#17493c";

        document.getElementById("komnat").innerHTML = "2 -комнатная";
        document.getElementById("area").innerHTML = "61.70 м";
        document.getElementById("fl.img").src = "https://thumb.tildacdn.com/tild3139-6537-4465-a639-336361643064/-/resize/880x/-/format/webp/noroot.png";



        fade();
    }
}
function change3(id){
   if(id='kom3'){
        document.getElementById("kom3").style.backgroundColor = "#17493c";
        document.getElementById("kom3").style.color = "white";
        document.getElementById("kom2").style.backgroundColor = "white";
        document.getElementById("kom2").style.color = "#17493c";
        document.getElementById("kom1").style.backgroundColor = "white";
        document.getElementById("kom1").style.color = "#17493c";
        
        document.getElementById("komnat").innerHTML = "3 -комнатная";
        document.getElementById("area").innerHTML = "87.90 м";
        document.getElementById("fl.img").src = "https://thumb.tildacdn.com/tild6336-6438-4961-b033-613233613464/-/resize/880x/-/format/webp/879.png";

        fade();
    }
}
function fade(){
    $("#kom1").css({opacity: '0'});
    $("#kom2").css({opacity: '0'});
    $("#kom3").css({opacity: '0'});
    $("#kom1").animate({opacity: '1'}, "slow");
    $("#kom2").animate({opacity: '1'}, "slow");
    $("#kom3").animate({opacity: '1'}, "slow");

    $("#komnat").css({opacity: '0'});
    $("#komnat").animate({opacity: '1'}, "slow");
    $("#area").css({opacity: '0'});
    $("#area").animate({opacity: '1'}, "slow");

    $("#fl.img").css({opacity: '0'});
    $("#fl.img").animate({opacity: '1'}, "slow");

}