$("#splashScreen").css("margin-top", $(window).height()/3);
$("#gameCanvas").css("margin-top", $(window).height()/15);
$("#notClicking").hide();

$("#startButton").click(function () {
        $("#splashScreen").hide();
        $("#gameCanvas").show();
        makeShape();
        counter = setInterval(timer, 1000);
        clickCounter = setInterval(noClick, 1000);
    });

var clickCount = 5;
var clickCounter;

function noClick() {
    if (clickCount == 0) {
        $("#notClicking").show();
        clearInterval(counter);
        clearInterval(clickCounter);
    } else {
        clickCount--;
    }
}

function resetClick() {
    clickCount = 5;
}

var createdTime = 0;
var clickedTime = 0;

function randomColor() {
    var hexDec = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += hexDec[Math.round(Math.random() * 15)];
    }
    return color;
}

var count = 30;
var counter;

function timer() {
    count --;
    if (count <= 0) {
        clearInterval(counter);
        clearInterval(clickCounter);
        var averageScore = 0;
        for (var i = 0; i < score.length; i++) {
            averageScore += score[i]
        }
        $("#average").html("Your average reaction time is " + averageScore/score.length + " seconds.");
        alert("Your average reaction time is " + averageScore/score.length + " seconds.");
        return;
    }
  $("#average").html("You have " + count + " seconds remaining.");
}

function makeShape () {
    var delay = Math.random() * 500;
    var randomLeft = Math.round(Math.random() * 470);
    var randomTop = Math.round(Math.random() * 470);

    setTimeout(function () {
        $("#shape").css("backgroundColor", randomColor());
        $("#shape").css("display", "block")
        if (Math.random() > 0.5) {
            $("#shape").css("borderRadius", "100px");
        } else {
            $("#shape").css("borderRadius", "0");
        }
        $("#shape").css("marginLeft", randomLeft + "px")
        $("#shape").css("marginTop", randomTop + "px")
        createdTime = Date.now();
        }, delay);

}

var score = [];

$("#shape").click(function() {
    clickedTime = Date.now();
    this.style.display = "none";
    $("#reactionTime").html("Your reaction time is " + (clickedTime - createdTime)/1000 + " seconds");
    score.push((clickedTime - createdTime)/1000);
    makeShape();
    resetClick();
});
