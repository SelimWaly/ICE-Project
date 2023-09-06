let events = document.getElementById('events');
fetch("http://localhost:8080/events").then(
    (values)=>
    {
        return values.json()
    }
    
).then(
    (values)=>
    {
        console.log(values)
        display(values)
    }
)


function display(values) {
    console.log(values);
    for (var i = values.length - 1; i >= 0; i--) {
        var content = values[i].content;
        if (content.length > 100) {
            content = content.substr(0, 57) + "...";
        }

        events.innerHTML += `
        <div class="col-md-6 animate-box">
            <div class="course">
                <a onclick="alert('This Image is for the ${values[i].title} event! To find more images, go to facebook.com/imperialcollegeegy')" class="course-img events-img" style="background-image: url(${values[i].image});"></a>
                <div class="desc">
                    <h3><a href="#">${values[i].title}</a></h3>
                    <p>${content}</p>
                    <span><a href="event.html?id=${values[i].id}" class="btn btn-primary btn-sm btn-course">View Event</a></span>
                </div>
            </div>
        </div>`
    }
}