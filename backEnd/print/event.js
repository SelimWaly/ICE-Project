window.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (id == 0 || id == null) {
        console.log("Event not found. Redirecting to events.html with argument(s) ['error': 'NotFound']");
        window.location.href = './events.html?error=NotFound'
    }
    else {
        console.log("Event found successfully. Generating data.")
        let body = document.getElementById('event');
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
            body.innerHTML += `
            
                <div id="fh5co-about">
                    <div class="container">
                        <div class="col-md-6 animate-box">
                            <span>Event</span>
                            <h2>${values[id].title}</h2>
                            <p>${values[id].description}</p>
                        </div>
                        <div class="col-md-6">
                            <img class="img-responsive" src="${values[id].image}" alt="Image">
                        </div>
                    </div>
                </div>
            
            `
        }
    }
});