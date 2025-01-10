document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded");

    const form = document.querySelector("#contact-form");
    const messageField = document.querySelector("#message-field");
    const joinCheckbox = document.querySelector("#join-interest-checkbox");

    if (!form || !messageField || !joinCheckbox) {
        console.error("One or more form elements were not found. Check your selectors.");
        return;
    }

    console.log("Form found:", form);
    console.log("Message field found:", messageField);
    console.log("Checkbox found:", joinCheckbox);

    form.addEventListener("submit", function (event) {
        console.log("Submit event triggered");

        const isMessageFilled = messageField.value.trim() !== "";
        const isCheckboxChecked = joinCheckbox.checked;

        console.log("Message field filled:", isMessageFilled);
        console.log("Checkbox checked:", isCheckboxChecked);

        if (!isMessageFilled && !isCheckboxChecked) {
            console.warn("Validation failed: Neither field is filled.");
            event.preventDefault(); // Prevent form submission
            event.stopImmediatePropagation(); // Stop Webflow from processing the submit event
            alert("Please fill out the message field or check the join interest list box.");
        } else {
            console.log("Validation passed!");
            // Allow the form to proceed or handle custom submission logic here
        }
    });
});
