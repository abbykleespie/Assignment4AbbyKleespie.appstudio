let names = []

btNextName.onclick=function(){
  if (names.length == 5)
    lblFavNames.value = "You have already picked your 5 favorite names. Click on the Button to go to the next page."
  else
    names.push(selBabyNames.text)
}



btChangeForm.onclick=function(){
  ChangeForm(favBabyNames)
}
