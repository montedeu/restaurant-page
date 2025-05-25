const home = function() {
    const content = document.querySelector("#content");

    // adding title
    const titleContainer = document.createElement("div");
    titleContainer.id = "titleContainer";
    
    const title = document.createElement("h1");
    title.innerText = "Generic Restaurant";
    titleContainer.appendChild(title);

    // adding schedule
    const scheduleContainer = document.createElement("div");
    scheduleContainer.id = "scheduleContainer";

    const scheduleTitle = document.createElement("h2");
    scheduleTitle.innerText = "Schedule";
    scheduleContainer.appendChild(scheduleTitle);

    const schedule = document.createElement("ul");
    schedule.id = "schedule";
    const scheduleArray = ["Monday: 9am - 6pm",
                            "Tuesday: 9am - 6pm",
                            "Wednesday: 9am - 6pm",
                            "Thursday: 9am - 10pm",
                            "Friday: 9am - 10pm", 
                            "Saturday: 9am - 12pm", 
                            "Sunday: 9am - 12pm"]

    for (var i = 0; i < scheduleArray.length; i++) {
        var li = createElement("li");
        li.innerText = array[i];
        schedule.appendChild(li);
    }
    scheduleContainer.appendChild(schedule);

    // adding location
    const locationContainer = document.createElement("div");
    locationContainer.id = "locationContainer";

    const locationTitle = document.createElement("h2");
    locationTitle.innerText = "Location";
    locationContainer.appendChild(locationTitle);

    const location = document.createElement("p");
    location.innerText = "Unknown str. 0";
    locationContainer.appendChild(location);

    // adding everything to content
    content.appendChild(titleContainer);
    content.appendChild(scheduleContainer);
    content.appendChild(locationContainer);
};

export default home;