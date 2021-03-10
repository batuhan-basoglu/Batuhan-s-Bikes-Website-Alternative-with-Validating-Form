// Calendar Validation
function toAppointment() {
  document.getElementById('appointment').scrollIntoView();
}

var value = 0;

$(function() {
  $("#datepicker").datepicker({
    beforeShowDay: getAvailability
  });
});

function getMechanic(selectObject) {
  value = selectObject.value;
}

function getAvailability(date) {

  if (value == 1 && (date.getDay() === 0 || date.getDay() == 6)) /* restrict weekends */
    return [false]
  if (value == 2 && (date.getDay() === 0 || date.getDay() == 1 || date.getDay() == 4 || date.getDay() == 5 || date.getDay() == 6)) /* restrict M,Thurs, Fri, Sat, Sun */
    return [false]
  if (value == 3 && (date.getDay() === 0 || date.getDay() == 4 || date.getDay() == 5 || date.getDay() == 6)) /* restrict Thurs, Fri, Sat, Sun */
    return [false]
  if (date.getDay() === 0 || date.getDay() == 6) /* weekends */
    return [false]
  else
    return [true, "", ""]
}

//Form Validation
function validateForm(){
  //first check that the user has selected,
  var serviceSelected = $('#selectService option:selected').val();
  console.log(optionSelected);
  if (serviceSelected === "Select Service"){
    alert("*Please select a service");
  }

  //next check for the technician selected by the users
  var technicanSelected = $('#technicanSelected option:selected').val();
  console.log(technicanSelected);
  if(technicanSelected === "Select technican"){
    alert("*Please select a technican")
  }

  //next, check for appointment date selection
  //next, check for appointment time selection

  // Account Section
  //check for creditCard holder name
  // check for credit card Format.
  // check for t
}
