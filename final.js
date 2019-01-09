
$(document).ready(function() {

    $(".top-right, .top-left, .middle-left, .middle-right, .bottom-left, .bottom-right").hover(function(){
        $(this).css("background-color", "#00ffd05b");
        }, function(){
        $(this).css("background-color", "transparent");
      });

    $(".top-right, .top-left, .middle-left, .middle-right, .bottom-left, .bottom-right").click(function() {
        var elbow = $(this).attr("title");
        $(".highlight").html(elbow);
    });

    function updateTextInput(val) {
        document.getElementById('textInput').value=val; 
        };

    });