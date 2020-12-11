// back top top 
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('#toTopBtn').fadeIn();
        } else {
            $('#toTopBtn').fadeOut();
        }
    });

    $('#toTopBtn').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});
// back top top

// responsive menu 
function openNav() {
    document.getElementById("header_menu1").style.width = "200px";
}

function closeNav() {
    document.getElementById("header_menu1").style.width = "0";
}
// responsive menu