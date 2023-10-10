var startButtton = $('#start')
startButtton.css({
    'background-color':'black'
})
var welcome = $('#welcoming')
function hidetitle(){
    $('#start').hide()
    $('#welcoming').hide()
    $(".grid-container").css({"display" : "grid"})
}

startButtton.on('click',hidetitle)
function showelement(){
      $('#score').show()
      $('#scorecount').show()
      $('#next').show()
      $('#gojo').show()
      $('#grid').show()
      


}
startButtton.on('click',showelement)

$( document ).ready(function() {
$('#score').hide()
$('#scorecount').hide()
$('#next').hide();
$('#gojo').hide();
$('#answers').hide();
$('#grid').hide()
});


var button = document.getElementById("next")
 
var itachi =$("<img src='https://i.pinimg.com/originals/38/55/0b/38550b1d86d56a120c38b1551a23aa3e.png'>")
var zoro = $("<img src='https://i.pinimg.com/1200x/f4/16/93/f4169331d8c13672bf45d0e210139d25.jpg'>")
var dio = 'https://pbs.twimg.com/media/EA7DQN8U4AESShY.jpg'
var ichigo = $("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgpLbYBx3HObGqhJ-a81DeVRA6cWJsu1Vfw&usqp=CAU'>")
var pic=$("#gojo")[0].src

var gojo=$("#gojo")[0]
var isGojo = true

function switchImage() {
    console.log("gojo[0] ",gojo);
    if (gojo.src===pic) {
        console.log("if");
        gojo.src ='https://pbs.twimg.com/media/EA7DQN8U4AESShY.jpg' ;
      } 
    else if(gojo.src==="https://pbs.twimg.com/media/EA7DQN8U4AESShY.jpg") { 
        gojo.src ='https://i.pinimg.com/1200x/f4/16/93/f4169331d8c13672bf45d0e210139d25.jpg'

    }
    else if(gojo.src==='https://i.pinimg.com/1200x/f4/16/93/f4169331d8c13672bf45d0e210139d25.jpg') { 
        gojo.src ='https://i.pinimg.com/originals/38/55/0b/38550b1d86d56a120c38b1551a23aa3e.png'

    }
    else  if(gojo.src==='https://i.pinimg.com/originals/38/55/0b/38550b1d86d56a120c38b1551a23aa3e.png') { 
        gojo.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgpLbYBx3HObGqhJ-a81DeVRA6cWJsu1Vfw&usqp=CAU'

    }
    isGojo = !isGojo;
}

$("#next").on('click',switchImage)
$('#gojo').click(function(){
    ('#div').append("true")
})

