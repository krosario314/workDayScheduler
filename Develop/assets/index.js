// Variables
// Display current date and time of users location
const currentDate = moment().format("dddd, MMM Do YYYY");
$("currentDay").html(currentDate);
const saveBtn = $(".saveBtn");

// Make save button functional
$(document.ready(function(){
    $(".saveBtn").on("click", function(){
        // More variables
        const time = $(this).parent().attr("id");
        const text = $(this).siblings(".description").val();
        localStorage.setItem(time, text);
    })
// Adding color to hour blocks
    function scheduleBlockColor() {
        const hour = moment().hour();
        $(".time-block").each(function(){
            const currentHour = parseInt($(this).attr("id"));
            if (currentHour > hour){
                $(this).addClass("future");
            } else if (currentHour === hour) {
                $(this).addClass("present");
            } else {
                $(this).addClass("past");
            }
        })
    };
// Make specific hour block save button functional
saveBtn.on("click", function(){
    const time = $(this).siblings(".hour").text();
    const plan = $(this).siblings(".plan").val();
    // saving in localStorage
    localStorage.setItem(time, plan);
});
// Saves all events
function saveEvent(){
    $(".hour").each(function(){
        const currentHour = $(this).text();
        const currentEvent = localStorage.getItem(currentHour);
    })
}
}))