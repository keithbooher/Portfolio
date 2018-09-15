// click handlers for nav bar items to take us to the next carousel
$(".portfolio").on("click", function(event) {
    console.log("stuff")

    $('.card').hide();

    $(".carousel").carousel(1);

    var myVar = setInterval(myTimer, 500);

    function myTimer() {
        window.location.replace('portfolio.html')
    }
})


$('.index').click(function() {
    console.log("stuff2")

    $(".carousel").carousel(0);
    
    var myVar = setInterval(myTimer, 500);

    function myTimer() {
        window.location.replace('index.html')
    }
});



//prevent carousel front auto sliding
$('.carousel').carousel({
    interval: false
});




document.getElementsByClassName("avatar").onclick = function () {
    console.log('test')
    location.href = "https://keithbooher.github.io/attack-based-game/";
};

document.getElementsByClassName("camping").onclick = function () {
    location.href = "https://iamstu.github.io/group-project1/";
};

document.getElementsByClassName("reactScrape").onclick = function () {
    location.href = "https://hidden-harbor-93880.herokuapp.com/";
};

document.getElementsByClassName("clicky").onclick = function () {
    location.href = "https://evening-sea-23536.herokuapp.com/";
};

document.getElementsByClassName("artGutter").onclick = function () {
    location.href = "https://artgutter.herokuapp.com/";
};

document.getElementsByClassName("nap").onclick = function () {
    location.href = "https://stormy-retreat-21451.herokuapp.com/";
};

