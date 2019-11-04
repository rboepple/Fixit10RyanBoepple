
btnAddCustomer.onclick=function(){
  let query = "SELECT DISTINCT name FROM customer;"
  let query2 = "INSERT INTO customer (`name`, `street`, `city`, `state`, `zipcode`) VALUES ('Jesse Antiques', '1113 F St', 'Omaha', 'NE', '68178')"
req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rpb75680&pass=X1g4yuv!&database=rpb75680&query=" + query)
req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=rpb75680&pass=X1g4yuv!&database=rpb75680&query=" + query2)
if (req2.status == 200) {      
    results2 = JSON.parse(req2.responseText)
  } else {             
    NSB.MsgBox("Error code: " + req2.status)
}
if (req1.status == 200) {      
    results = JSON.parse(req1.responseText)    
  if (results.length == 0)        
    NSB.MsgBox("Error")  
  else {                     
    let message = ""        
    for (i = 0; i <= results.length - 1; i++)           
      message = message + results[i][0] + "\n"        
    tAAddedCustomer.value = message 
    }
  } else       
    NSB.MsgBox("Error code: " + req1.status)
  }

