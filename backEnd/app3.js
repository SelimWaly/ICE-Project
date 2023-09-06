var updateprice = document.getElementById("updateprice")
var yearlevel = document.getElementById("yearlevel")
var newprice = document.getElementById("newprice")

updateprice.onclick = ()=>{
    let price = {"level" : yearlevel.value, "price" : newprice.value}
    
    console.log("Successfully updated " + price)
    fetch("http://localhost:8080/updateprice" , {
        method: "PUT" ,
        headers : {"content-Type" : "application/json"} ,
        body : JSON.stringify(price)
    })
}


var updateevent = document.getElementById("updateevent")
var eventid = document.getElementById("neweventid")
var eventname = document.getElementById("neweventname")
var eventdesc = document.getElementById("neweventdesc")
var eventimg = document.getElementById("neweventimg")

updateevent.onclick = ()=>{
    let event = {"id" : eventid.value, "title" : eventname.value, "description" : eventdesc.value, "image" : eventimg.value}
    
    console.log("Successfully updated " + event)
    fetch("http://localhost:8080/updateevent", {
        method: "PUT" ,
        headers : {"content-Type" : "application/json"} ,
        body : JSON.stringify(event)
    })
}