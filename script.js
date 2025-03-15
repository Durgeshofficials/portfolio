function SendMail() {
    // Get the values from the form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Validate that none of the fields are empty
    if (name === "" || email === "" || message === "") {
        alert("All fields are required: Please enter your Name, Email, and Message");
        return;  // Prevent sending the email
    }
    
    // Prepare parameters for the email
    var params = {
        from_name: name,
        email_id: email,
        message: message
    };
    
    // Send the email using EmailJS
    emailjs.send("service_g23mlpo", "template_gjoe5sf", params)
    .then(function(res) {
        //alert("Success! Status: " + res.status);
        alert("Thank you for reaching out!");
        
        // Clear the input fields after successful submission
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    })
    .catch(function(error) {
        alert("failed to send email. Please try again.");
    });
}