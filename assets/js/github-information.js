function fetchGitHubInformation(event) {
    // use jquery to select the ID
    var username = $("#gh-username").val();
    if (!username) { // if username field is empty
        // add a piece of html to the gh-user-data div using jquery
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        // return out of the function
        return;
    }
    // if text HAS been added to the input field, show this html in that div instead
    $("#gh-user-data").html(
        // this image will repeat while data is being accessed
        `<div id="loader">
        <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);

    // here we issue the promise - the .when method takes a function as 1st argument
    $.when(
        // getJSON function passes the address of github API & value of input username
        $.getJSON(`https://api.github.com/users/${username}`)
    ).then( // display it in the gh-user-data div
        // response is what came back from getJSON method
        function(response) {
            var userData = response; // store the response in a variable
            // set the html of the div to the results of another function
            $("#gh-user-data").html(userInformationHTML(userData));
            
            // add an error function in case the promise doesn't work out
        }, function(errorResponse) {
            // if 404 (not found error), display this text in the div
            if (errorResponse.status === 404) {
                $("#gh-user-data").html(`<h2>No info found for user ${username}</h2>`);
            } else {
                console.log(errorResponse);
                // get JSON response from the errorResponse variable
                $("#gh-user-data").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
            }
        }
    )
}