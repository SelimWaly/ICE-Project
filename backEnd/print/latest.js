let latest = document.getElementById('latest');
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




function display(values)
{
    console.log(values)
for(var i = values.length ; i = values.length - 4 ; i--)
{
    latest.innerHTML += `
    
    <div class="col-md-6 animate-box">
        <div class="course">
            <a href="#" class="course-img" style="background-image: url(${values[i].image});">
            </a>
            <div class="desc">
                <h3><a href="#">${values[i].title}</a></h3>
                <p>${values[i].content}</p>
                <span><a href="#" class="btn btn-primary btn-sm btn-course">View Event</a></span>
            </div>
        </div>
    </div>
    
    `
    
}
}