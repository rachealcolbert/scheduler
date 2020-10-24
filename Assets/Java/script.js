// Today's Date
var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format("[Today is] dddd, MMMM Do");

// Change box color based on past, preset, and future time 
var changeBox = function (changeColor) {
    var time = moment().format("H");

    if (moment().isAfter(time)) {
        $(changeColor).addClass("future");
    };

    if (moment().isBefore(time)) {
        $(changeColor).addClass("past");
    } else {
        $(changeColor).addClass("present")
    };
};