//Javascript


var addevent = document.getElementById("addevent")

var eventname = document.getElementById("eventname")
var eventdesc = document.getElementById("eventdesc")
var eventimg = document.getElementById("eventimg")



//Code

addevent.onclick = ()=>{
    let event = {"courseName" : coursesname.value , "coursePrice" : coursesprice.value , "CourseFeature1" : coursesft1.value , "CourseFeature2" : coursesft2.value , "CourseFeature3" : coursesft3.value}
    
    console.log("Successfully added " + event)
    fetch("http://localhost:8080/addevent" , {
        method: "POST" ,
        headers : {"content-Type" : "application/json"} ,
        body : JSON.stringify(event)
    })
}





////////////////////////////////////////////////////////


// const archiveemail = document.getElementById("sendemail")

// var archiveid = document.getElementById("archiveid")


// //Code

// archiveemail.onclick = ()=>{
//     let archive = {"id" : sendername.value , "email" : senderemail.value , "title" : sendertitle.value , "content" : sendercontent.value}

//     fetch("http://localhost:8080/archiveemail" , {
//         method: "POST" ,
//         headers : {"content-Type" : "application/json"} ,
//         body : JSON.stringify(email)
//     })

//     fetch("http://localhost:8080/sendemail" , {
//         method: "POST" ,
//         headers : {"content-Type" : "application/json"} ,
//         body : JSON.stringify(email)
//     })
// }
