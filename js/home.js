var totalItems = $('.carousel-item').length;
var currentIndex = $('.carousel-inner.active').index() + 1;
$('.num').html('' + currentIndex + '/' + totalItems + '');

$('.carousel-inner').bind('slid', function() {
    currentIndex = $('.carousel-inner.active').index() + 1;
    $('.num').html('' + currentIndex + '/' + totalItems + '');
    console.log(currentIndex);
});

function openNav() {
    document.getElementById("header_menu1").style.width = "200px";
}

function closeNav() {
    document.getElementById("header_menu1").style.width = "0";
}

// var navbar = document.getElementsByClassName("header_menu")[0];
// var sticky = navbar.offsetTop;
// window.onscroll = function() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// };

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