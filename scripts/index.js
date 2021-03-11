function toAppointment() {
    document.getElementById('appointment').scrollIntoView();
}
// Calendar Validation
// //logic was gotten from
// https://forum.jquery.com/topic/disable-single-day-of-a-week-in-datepicker
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

//grab my Form
var form = $('#contactForm');

//Form Validation
function validateForm() {
    //first check that the user has selected,
    var serviceSelected = $('#selectService option:selected').val();
    if (serviceSelected === "Select Service") {
        $('#serviceError').html("*Please select a service");
    } else {
        $('#serviceError').html("");
    }

    //next check for the technician selected by the users
    if ($('#selectTechnican option:selected').val() === "Select technican") {
        $('#technicanError').html("*Please select a technican");
    } else {
        $('#technicanError').html("");
    }

    //next, check for appointment date selection
    if ($('#datepicker').val() === "") {
        $('#dateError').html("*Please select an appointment Date");
    } else {
        $('#dateError').html("");
    }
    //next, check for appointment time selection
    var timeSelected = $('#appt-time').val();
    if ($('#appt-time').val() === "") {
        $('#timeError').html("*Please select an appointment time");
    } else {
        $('#timeError').html("");
    }
    // Account Section
    // //check the first Name Field
    if ($('#fname').val() === "" || !$('#fname').val().length) {
        $("#fnameError").html("*Please enter your first name");
    } else {
        $("#fnameError").html("");
    }
    //check the last name field
    if ($('#lname').val() === "" || !$('#lname').val().length) {
        $("#lnameError").html("*Please enter your last name");
    } else {
        $("#lnameError").html("");
    }
    //check the phone number Field and validate phone number
    // var phoneNumber = $('#phoneNum').val();
    //this filter was gotten from this website to valid the phone Number *https://www.w3resource.com/javascript/form/phone-no-validation.php*
    var phoneFilter = /^\d{10}$/;
    // console.log(phoneNumber);
    if ($('#phoneNum').val() === "" || !$('#phoneNum').val().length) {
        $("#phoneNumberError").html("*Please enter your Phone Number");
    } else if (!$('#phoneNum').val().match(phoneFilter)) {
        $("#phoneNumberError").html("*Invalid phone number please enter a 10 digit number");
    } else {
        $("#phoneNumberError").html("");
    }
    //source of this is from the link below
    //https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    var emailFilter = /^\S+@\S+$/;
    if ($('#email').val() === "" || !$('#email').val().length) {
        $("#emailError").html("*Please enter your email Address");
    } else if (!$('#email').val().match(emailFilter)) {
        $("#emailError").html("*Please enter a valid email address");
    } else {
        $("#emailError").html("");
    }


    // console.log(cardHolder);
    if ($('#cardHolder').val() === "" || !$('#cardHolder').val().length) {
        $("#cardHolderError").html("*Please enter name on the card");
    } else {
        $("#cardHolderError").html("");
    }

    //the logic used for the filters in this section was gotten from
    ////https://stackoverflow.com/questions/6176802/how-to-validate-a-credit-card-number
    var creditFilter = /^\d{16}$/;

    if ($('#creditCard').val() === "" || !$('#creditCard').val().length) {
        $("#creditCardError").html("*Please enter your valid credit card number");
    } else if (!$('#creditCard').val().match(creditFilter)) {
        $("#creditCardError").html("*Invalid credit card number. Please enter a valid 16 digit credit card");
    } else {
        $("#creditCardError").html("");
    }

    var expiryFilter = /^\d{4}$/;
    if ($('#expiryDate').val() === "" || !$('#expiryDate').val().length) {
        $("#expiryDateError").html("*Please enter your credit card expiry date");
    } else if (!$('#expiryDate').val().match(expiryFilter)) {
        $("#expiryDateError").html("*Invalid expiry date. Please enter a valid expiry date of format MMYY!");
    } else {
        $("#expiryDateError").html("");
    }

    var cvvFilter = /^\d{3}$/;
    if ($('#cvv').val() === "" || !$('#cvv').val().length) {
        $("#cvvError").html("*Please enter your credit card CVV");
    } else if (!$('#cvv').val().match(cvvFilter)) {
        $("#cvvError").html("*Please enter 3 digit number");
    } else {
        $("#cvvError").html("");
    }
    //after all the test pass submit the form and reset.
    contactForm.reset();

}
