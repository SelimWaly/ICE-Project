let emails = document.getElementById('emails');
fetch("http://localhost:8080/emails").then(
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
    for(var i=0 ; i < values.length ; i++)
    {
        emails.innerHTML += `
        
        <tr>
            <td>${values[i].id}</td>
            <td>${values[i].name}</td>
            <td>${values[i].email}</td>
            <td>${values[i].title}</td>
            <td>${values[i].content}</td>
            <td>${values[i].timestamp}</td>
        </tr>
        
        `
        
    }
}