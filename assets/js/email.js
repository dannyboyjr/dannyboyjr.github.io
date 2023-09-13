$(document).ready(function() {
    $("#sendEmailButton").click(function(e) {
        e.preventDefault();  // Prevent default form submission

        // Capture form input
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();

        // Construct the mailto link
        var mailtoLink = `mailto:danieljameskimball@gmail.com?subject=${encodeURIComponent(subject + " from " + name)}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;

        // Open the mail client
        window.location.href = mailtoLink;
    });
});
