$(document).ready(function(){
    $(".img").mousemove(function(){
        //link pega o atributo src desse objeto, no caso da classe img
        link = $(this).attr('src')
        $("#img_g").attr({src:link})
    })
})