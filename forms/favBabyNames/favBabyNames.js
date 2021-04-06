favBabyNames.onshow = function() {
  Image1.hidden = true
  drpFavName.clear()
  console.log(drpFavName)
  for (i = 0; i < 5; i++)
    drpFavName.addItem(names[i])
}

drpFavName.onclick = function(s) {
  if (typeof(s) == "object") {
    return
  } else {
    drpFavName.value=s
    lblFavName.value = `Your favorite baby name was ${s}.`
    Image1.hidden = false
  }
}