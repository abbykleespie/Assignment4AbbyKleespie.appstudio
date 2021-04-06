let req1 = ""
let results = ""
let netID = "aek25845"
let pw = "Quincy1"


Employee.onshow=function(){
  drpState.clear()
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aek25845&pass=Quincy1&database=aek25845&query=SELECT state, name FROM customer");  
  if(req1.status == 200) {
    results = JSON.parse(req1.responseText)
    if (results.length == 0){
      console.log = "There are no states in the database."
    }else{
      for(i=0; i< results.length; i++)
        drpState.addItem(results[i])
    }
  }
}

drpState.onclick=function(s){
  if(typeof(s) == 'object'){
    return
  }else {
    lstName.addItem(s)
  }
}

