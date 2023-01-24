var currentDate = moment().format("[Today is: ]dddd, DDDo MMMM YYYY"); //Displays current date at the top of the page
$("#currentDay").text(currentDate);

var currentTime = moment().format("HH");

displayHours = function(){ //Function to display working day hours
    var setHours = document.getElementsByTagName("h2"); //Takes all h2 elements from page
    var setInputColor = document.getElementsByTagName("input");
    var currentHour = 9;
    var tempHour = 0;
    var tempInput = 0;

    while (currentHour < 18){ //Loop to set hours 9:00 to 17:00

        setHours[tempHour].textContent = moment().hour(currentHour).format("HH:00"); //moment.js sets time
        
        if (currentTime == currentHour){
            setInputColor[tempInput].classList.toggle("present");
        }
        else if (currentTime > currentHour){
            setInputColor[tempInput].classList.toggle("past");
        }
        else {
            setInputColor[tempInput].classList.toggle("future");
        }

        tempHour++;
        tempInput++;
        currentHour++;
    } 
}

console.log(currentTime);

displayHours();