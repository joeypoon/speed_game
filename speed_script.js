$("#startButton").click(function () {
        $("#splashScreen").hide();
        $("#gameCanvas").show();
        makeShape();
        counter = setInterval(timer, 1000); //1000 will run it every 1 second
    });

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
        //counter ended, do something here
        var averageScore = 0;
        for (var i = 0; i < score.length; i++) {
            averageScore += score[i]
        }
        $("#average").html("Your average reaction time is " + averageScore/score.length + " seconds.");
        alert("Your average reaction time is " + averageScore/score.length + " seconds.");
        return;
    }
  //Do code for showing the number of seconds here
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
});
