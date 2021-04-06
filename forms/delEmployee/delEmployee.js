btDisplayName.onclick = function() {
  selName.clear()
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aek25845&pass=Quincy1&database=aek25845&query=SELECT name FROM customer");
  if (req1.status == 200) {
    results = JSON.parse(req1.responseText)
    if (results.length == 0) {
      console.log = "There are no names in the database."
    } else {
      for (i = 0; i < results.length; i++)
        selName.addItem(results[i])
    }
  }
}

selName.onchange = function() {
  let customerNameDel = selName.value
  let found = true
  console.log(customerNameDel)
  for (i = 0; i < results.length; i++) {
    if (customerNameDel == results[i][1]) {
      found = true
      break
    }
  }
  if (found == false)
    lblRefresh.textContent = "That customer name is not in the database."
  else if (found == true) {
    query = "DELETE FROM customer WHERE name = '" + customerNameDel + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aek25845&pass=Quincy1&database=aek25845&query=" + query)
    if (req.status == 200) //transit worked.
      if (req.responseText == 500)
        lblRefresh.textContent = `You have successfully deleted the customer named ${customerNameDel}. Refresh the page.`
      else
        lblRefresh.textContent = `There was a problem deleting ${customerNameDel} from the database.`
    else
      lblRefresh.textContent = `Error: ${req.status}`
  }
}