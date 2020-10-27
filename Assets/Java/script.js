// Today's Date
var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format("[Today is] dddd, MMMM Do");

// Change box color based on past, preset, and future time 

$(".meeting-event").on("click", "p", function () {
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$(".meeting-event").on("blur", "textarea", function () {
    var text = $(this)
        .val()
        .trim();
    var status = $(this)
        .closest(".meeting-event")
        .attr("id")
        .replace("meeting-", "");
    var index = $(this)
        .closest(".row")
        .index();
    tasks[status][index].text = text;
    saveTasks();
    var taskP = $("<p>")
        .addClass()
        .text(text);

    // replace textarea with p element
    $(this).replaceWith(taskP);
});
