var currentDate = moment().format("[Today is: ]dddd, DDDo MMMM YYYY"); //Displays current date at the top of the page
$("#currentDay").text(currentDate);

var currentTime = moment().format("HH"); //Gets the current time

var userEvents = JSON.parse(localStorage.getItem("userEvents"));


displayHours = function(){ //Function to display working day hours
    var setHours = document.getElementsByTagName("h2"); //Takes all elements with specified tag from page
    var userInputs = document.getElementsByTagName("input");
    var currentHour = 9;
    var tempHour = 0;
    var setInput= 0;

    while (currentHour < 18){ //Loop to set hours 9:00 to 17:00

        setHours[tempHour].textContent = moment().hour(currentHour).format("HH:00"); //moment.js sets time
        
        if (currentTime == currentHour){ //If the hour of the current time equals that of the row, the corresponding style is applied
            userInputs[setInput].classList.toggle("present");
        }
        else if (currentTime > currentHour){
            userInputs[setInput].classList.toggle("past");
        }
        else {
            userInputs[setInput].classList.toggle("future");
        }

        tempHour++;
        setInput++;
        currentHour++;
    }
}

$("button").click(function(){ //Gets the id of the save button that the user clicks
    clickedBtn = this.getAttribute("data-id");
    saveEvent();
});

saveEvent = function (){
    var userInputs = document.getElementsByTagName("input");
    var setInput= clickedBtn; 
    var tempInput = $(userInputs[setInput]).val(); //Takes the user input from the row corresponding to the button they click

    console.log("The user entered: '" +tempInput +"' on row: " +clickedBtn);

    var userEvents = [];
    var tempUserInput = [tempInput, setInput];

    userEvents = JSON.parse(localStorage.getItem('userEvents')) || []; //Loads user events array from local storage or creates empty array if it doesn't exist
    userEvents.push(tempUserInput); //Adds user inputted event to array
    localStorage.setItem("userEvents", JSON.stringify(userEvents)); //Saves array to local storage
}

displayHours();