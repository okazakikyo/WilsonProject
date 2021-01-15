$(document).ready(function(){
    $(".tab-content").load("basketball.html");
$(document).on("click", "#basketball, .tab-content", function(e){
    e.preventDefault();

    $(".tab-content").load("basketball.html");
}))