function collectdate(){
  var Birthday = document.getElementById("Bday").value;
  alert(Birthday);
  var date = parseInt(Birthday.slice(0,4));
  alert(date);
  var century =parseInt(Birthday.slice(0,2));
  alert(century);
  var year    =parseInt(Birthday.slice(3,4));
  alert(year);
  var month =parseInt(Birthday.slice(5,7));
  alert(month);
  var day = parseInt(Birthday.slice(8,10));
  var dayOfTheWeek = (((century/4)-2*century-1) + ((5*year/4) ) + ((26*(month+1)/10))+day)
  alert(parseInt(dayOfTheWeek%7));
  if (day>31){
    console.log("Invalid Day")
  }

  

  
}
