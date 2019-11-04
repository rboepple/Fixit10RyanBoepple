
customerUpdate.onshow=function(){
  let query = "SELECT DISTINCT name FROM customer;"          
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rpb75680&pass=X1g4yuv!&database=rpb75680&query=" + query)    

  if (req1.status == 200) {      
    results = JSON.parse(req1.responseText)    
  if (results.length == 0)        
    NSB.MsgBox("Error")  
  else {                     
    let message = ""        
    for (i = 0; i <= results.length - 1; i++)           
      message = message + results[i][0] + "\n"        
    tACustomerListingUpdate.value = message 
    }
  } else       
    NSB.MsgBox("Error code: " + req1.status)
}

btnUpdate.onclick=function(){
  let customer = inptCustomerNameUpdate.value
  let newName = inptCustomerNameNew.value
 query2 = "UPDATE customer SET name ="+"'"+ newName + "'"+ "WHERE name ="+"'" + customer +"'"+";"
 req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rpb75680&pass=X1g4yuv!&database=rpb75680&query=" + query2)
if (req2.status == 200) {      
    results2 = JSON.parse(req2.responseText)

if (results2.length == 0)                       
    NSB.MsgBox("There are no customers with that name.")    
  else {                
    let message = 'The customer ' + customer + ' had their name changed to '+ newName+'.'        
    tACustomerUpdated.value = message 
    }
  } else              
    NSB.MsgBox("Error code: " + req2.status)
}
