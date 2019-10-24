$(document).ready(function(){
    $("html").click(function(){
        $("p:contains(I am a hidden secret)").slideUp("slow");
    });
});