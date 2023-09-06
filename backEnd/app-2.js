const sendemail = document.getElementById("sendemail")

var sendername = document.getElementById("sendername")
var senderemail = document.getElementById("senderemail")
var sendertitle = document.getElementById("sendertitle")
var sendercontent = document.getElementById("sendercontent")


//Code

sendemail.onclick = ()=>{
    let email = {"name" : sendername.value , "email" : senderemail.value , "title" : sendertitle.value , "content" : sendercontent.value}

    fetch("http://localhost:8080/sendemail" , {
        method: "POST" ,
        headers : {"content-Type" : "application/json"} ,
        body : JSON.stringify(email)
    })
}