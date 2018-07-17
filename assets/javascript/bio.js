// just a button with this id
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


$('.carousel').carousel({
    interval: false
});

