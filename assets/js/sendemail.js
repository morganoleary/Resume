function sendMail(contactForm) { // pass in the form as the parameter
    emailjs.send("default_service", "template_resume", {
        "from_name": contactForm.name.value,  // name from contact.html 
        "from_email": contactForm.emailaddress.value, // emailaddress from contact.html
        "project_request": contactForm.projectsummary.value // from html
    })
    // .then method for the promise
    .then(
        function(response) {
            // first will be a success & pass response object
            console.log("SUCCESS", response);
        }, 
        function(error) {
            // second will be an error & pass error object
            console.log("FAILED", error);
        }
    );
    return false; // To block from loading a new page
}