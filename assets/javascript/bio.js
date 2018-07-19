// click handlers for nav bar items to take us to the next carousel
$(".portfolio").on("click", function(event) {
    console.log("stuff")
    $(".carousel").carousel(1);
    
});

$('.contact').click(function() {
    console.log("stuff1")

    $(".carousel").carousel(2);

});

$('.index').click(function() {
    console.log("stuff2")

    $(".carousel").carousel(0);
    
});

//prevent carousel front auto sliding
$('.carousel').carousel({
    interval: false
});

