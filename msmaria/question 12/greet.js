$(document).ready(function(){
    $("button").click(function(){
        var user = $("input").val();
        $("p").text("Good morning " + user + "!");
        $("input").val("");
    });
});