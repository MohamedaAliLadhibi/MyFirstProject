var startButtton = $('#start')
startButtton.css({
    'background-color':'black'
})
var title1 = $('#welcoming')
function hidetitle(){
    $('#start').hide()
    $('#welcoming').hide()
}
startButtton.on('click',hidetitle)
 
var title1 = $('#welcoming')
function showelement(){  
      $('#score').show()
      $('#scorecount').show()
      $('#next').show()
      

}
startButtton.on('click',showelement)



$( document ).ready(function() {
    $('#score').hide()
$('#scorecount').hide()
$('#next').hide();
});
