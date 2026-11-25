
// Get the calculator display
let display = document.getElementById("display");

// Add numbers and operators to display
function appendValue(value) {

    display.value = display.value + value;

}

// Clear the entire display
function clearDisplay() {

    display.value = "";

}

// Delete the last character
function deleteLast() {

    display.value = display.value.slice(0, -1);

}

// Calculate the result
function calculateResult() {

    try {

        let expression = display.value;

        // Check for empty input
        if (expression === "") {
            return;
        }

        // Allow only calculator characters
        if (!/^[0-9+\-*/. ]+$/.test(expression)) {
            throw new Error("Invalid Input");
        }

        // Calculate the expression
        let result = Function('"use strict"; return (' + expression + ')')();

        // Check invalid results
        if (!Number.isFinite(result)) {
            throw new Error("Invalid Calculation");
        }

        // Display the result
        display.value = result;

    }

    catch (error) {

        display.value = "Error";

    }

}
