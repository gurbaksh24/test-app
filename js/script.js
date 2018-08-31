//$(document).ready(function(){
     //$("#defaultOpen").addClass("active");
//})
function ActiveContent(evt, buttonName) {
    $(".tabcontent").each(function(){
        $(this).css('display','none');
    });
        $(".Insidetabcontent").each(function(){
        $(this).css('display','none');
    });
    $(".tablinks").each(function(){
        $(this).removeClass("active");
    });
    $('#'+buttonName).css('display','block');
    $(evt.currentTarget).addClass("active");
}
// Get the element with id="defaultOpen" and click on it
    //$("#defaultOpen").click();
 //$( "#defaultOpen" ).trigger( "click" );
document.getElementById("defaultOpen").click();

function ActiveInsideContent(evt, buttonName) {
    $(".Insidetabcontent").each(function(){
        $(this).css('display','none');
    });
    $(".Insidetablinks").each(function(){
        $(this).removeClass("active");
    });
    $('#'+buttonName).css('display','block');
    $(evt.currentTarget).addClass("active");
}