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

// $('.resume').click(function() {


//     window.location.replace('KeithBooherResume.html')


// });

//prevent carousel front auto sliding
$('.carousel').carousel({
    interval: false
});


// document.getElementById("triviaGame").onclick = function () {
//     location.href = "https://keithbooher.github.io/TriviaGame/";
// };

// document.getElementById("crystalcollector").onclick = function () {
//     location.href = "https://keithbooher.github.io/unit-4-game/";
// };

// document.getElementById("giphy").onclick = function () {
//     location.href = "https://keithbooher.github.io/giphy-page/";
// };

document.getElementById("avatar").onclick = function () {
    location.href = "https://keithbooher.github.io/attack-based-game/";
};

document.getElementById("camping").onclick = function () {
    location.href = "https://iamstu.github.io/group-project1/";
};

document.getElementById("liri").onclick = function () {
    location.href = "https://github.com/keithbooher/liri-node-app";
};

document.getElementById("friends").onclick = function () {
    location.href = "https://friendliestfinder.herokuapp.com/";
};

document.getElementById("scraper").onclick = function () {
    location.href = "https://afternoon-garden-86498.herokuapp.com/";
};

document.getElementById("nap").onclick = function () {
    location.href = "https://stormy-retreat-21451.herokuapp.com/";
};

