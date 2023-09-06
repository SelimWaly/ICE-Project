const express_module = require("express");
const multer_module = require("multer");
const server = express_module();
const upload = multer({ dest: 'uploads/' });
server.listen(8080);



server.use( (request,response,next)=>
{
    response.setHeader("Access-Control-Allow-Origin" ,  "*")
    response.setHeader("Access-Control-Allow-Methods" ,  "*")
    response.setHeader("Access-Control-Allow-Headers" ,  "*")
    next()
})


server.use(express_module.urlencoded({extended:false}))
server.use(express_module.json())



const mysql = require("mysql");
const address = {"host" : "localhost" , "user" : "root" , "database" : "ice-project"}
const DB = mysql.createConnection(address)



DB.connect
(
    (error)=>
    {
        if(error)
        console.log(error)
        else
        console.log("Database Successfully Connected")
    }
)


server.post("/addevent" , 
(request,response)=>
{
    const addeventquery = "Insert INTO events set ?" 

    console.log(request.body)
    DB.query(addemailquery, request.body ,(error)=>{console.log(error)}  )
    
}
)



server.delete("/deleteevent" , 
(request,response)=>
{
    const deleteevent = "Delete FROM events WHERE id ='"+request.body.id+"'"

    console.log(request.body)
    DB.query(deleteevent ,(error)=>{console.log(error)}  )
    
}
)



server.put("/updateevent" , 
(request,response)=>
{
    const updateevent = "Update events SET ? WHERE id='"+request.body.id+"'"

    console.log(request.body)
    DB.query(updateevent ,(error)=>{console.log(error)}  )
    
}
)


// server.post("/addevent" , upload.single('image'), 
// (request,response)=>
// {
//     const image = request.file.buffer;
//     const textData = request.body.textData;
//     const addeventquery = "Insert INTO events set ?"
//     const addeventquery2 = "INSERT INTO events (name, image_data, text_data) VALUES (?, ?, ?)"

//     console.log(request.body)
//     DB.query(addemailquery2, request.body ,(error)=>{console.log(error)}  )
    
// }
// )

///////////////////////////////////////////////////////////////////


server.post("/sendemail" , 
(request,response)=>
{
    const sendemailquery = "Insert INTO emails set ?" 

    console.log(request.body)
    DB.query(sendemailquery, request.body ,(error)=>{console.log(error)}  )
    
}
)

server.delete("/deleteemail" , 
(request,response)=>
{
    const deleteemail = "Delete FROM emails WHERE id ='"+request.body.id+"'"

    console.log(request.body)
    DB.query(deleteemail ,(error)=>{console.log(error)}  )
    
}
)


///////////////////////////////////////////////////////////////////


server.put("/updateprice" , 
(request,response)=>
{
    const updateprice = "Update prices SET ? WHERE level='"+request.body.yearlevel+"'"

    console.log(request.body)
    DB.query(updateprice ,(error)=>{console.log(error)}  )
    
}
)

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

server.get("/events" , 
(request,response)=>
{
    DB.query("Select * FROM events", (error,data)=>{console.log(error)
    response.send({"results" : data})}  )
    
}
)

server.get("/emails" , 
(request,response)=>
{
    DB.query("Select * FROM emails", (error,data)=>{console.log(error)
    response.send(data)}  )
    
}
)


server.get("/prices" , 
(request,response)=>
{
    DB.query("Select * FROM prices", (error,data)=>{console.log(error)
    response.send(data)}  )
    
}
)
