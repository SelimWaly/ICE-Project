let prices = document.getElementById('prices');
fetch("http://localhost:8080/prices").then(
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
        prices.innerHTML += `
        
        <tr>
            <td>${values[i].level}</td>
            <td>${values[i].prive}</td>
        </tr>
        
        `
        
    }
}