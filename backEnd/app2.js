
var deleteevent = document.getElementById("deleteevent")
var eventid = document.getElementById("eventid")

deleteevent.onclick = ()=>{
    let event = {"id" : eventid.value}
    
    console.log("Successfully deleted " + event)
    fetch("http://localhost:8080/deletevent" , {
        method: "POST" ,
        headers : {"content-Type" : "application/json"} ,
        body : JSON.stringify(event)
    })
}



var deleteemail = document.getElementById("deleteemail")
var emailid = document.getElementById("emailid")

deleteemail.onclick = ()=>{
    let email = {"id" : emailid.value}
    
    console.log("Successfully deleted " + email)
    fetch("http://localhost:8080/deleteemail" , {
        method: "POST" ,
        headers : {"content-Type" : "application/json"} ,
        body : JSON.stringify(email)
    })
}