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
    });
