// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var message = document.contactForm.message.value;
   
    
	// Defining error variables with a default value
    var nameError = emailError = mobileError = countryError  = messageError = true;
    
    // Validate name
    if(name == "") {
        printError("nameError", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameError", "Please enter a valid name");
        } else {
            printError("nameError", "");
            nameError = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailError", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailError", "Please enter a valid email address");
        } else{
            printError("emailError", "");
            emailError = false;
        }
    }
    
  // Validate mobile number
  if(mobile == "") {
    printError("mobileError", "Please enter your mobile number");
} else {
    var regex = /^[1-9]\d{8}$/;
    if(regex.test(mobile) === false) {
        printError("mobileError", "Please enter a valid 9 digit mobile number");
    } else{
        // printError("mobileError", "");
        mobileError = false;

        let inputNum = document.getElementById("mobile").value;
        output = [],
        sNumber = inputNum.toString();

            for (var j = 0, len = sNumber.length; j < len; j++) {
                output.push(+sNumber.charAt(j));
            }
            console.log(output);

              //compare output with inputNum 

              let yemen2Num = [0, 1, 3, 7];
              console.log(yemen2Num);


                if(((output[0] === 7) && (output[1] === (yemen2Num[0] || yemen2Num[1] || yemen2Num[2] || yemen2Num[3]))) == false){

                    printError("mobileError", "Please enter a valid Yemeni Number");}

                
    }
}    
    
    
    // Validate country
    if(country == "Select") {
        printError("countryError", "Please select your country");
    } else {
        printError("countryError", "");
        countryError = false;
    }
    


    // Validate message
    if(name == "") {
        printError("messageError", "Please enter your message");
    } else {
        console(message.length)
        
        if( (message.length>300) === false) {
            printError("nmessageError", "Limit is 300 character message");
        } else {
            printError("messageError", "");
            messageError = false;
        }
    }

    
    // Prevent the form from being submitted if there are any errors
    if((nameError || emailError || mobileError || countryError || messageError ) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Country: " + country + "\n" +
    
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};