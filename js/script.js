$(document).ready(function(){
    $(".tab_content").hide();
    $(".tab_content:first-child").show();
    $(".tabs li").click(function (e) { 
        $(".tabs li").removeClass("active");
        $(this).addClass("active");

        const current_tab = $(this).attr("data-attr");
        $(".tab_content").hide();
        $("."+current_tab).show();
        $(".tab_content").css({
            backgroundColor : "cadetblue",
            padding : "10px",
            borderRadius : "15px",
            transitionDuration : "0.5s"
        });
    });
})