// Today's Date
var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format("[Today is] dddd, MMMM Do");

// Change box color based on past, preset, and future time 
var changeBox = function (changeColor) {
    var currentTime = moment();
    var currentHour = currentTime.hour();

    if (moment(currentTime).isAfter(currentHour)) {
        $(changeColor).addClass("future");
    };

    if (moment(currentTime).isBefore(currentHour)) {
        $(changeColor).addClass("past");
    } else {
        $(changeColor).addClass("present")
    };
};