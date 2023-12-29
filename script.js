// Function to calculate present value
function calculatePresentValue() {
    // Get user inputs
    var futureValue = parseFloat(document.getElementById("futureValue").value);
    var inflationRate = parseFloat(document.getElementById("inflationRate").value) / 100; // Convert percentage to decimal
    var numberOfYears = parseInt(document.getElementById("numberOfYears").value);

    // Calculate present value
    var presentValue = futureValue / Math.pow((1 + inflationRate), numberOfYears);
    presentValue = presentValue.toFixed(2); // Round off to two decimal points

    // Display result with dynamic values in bold
    var resultText = `<p>Value/purchasing power of <strong> ${futureValue} </strong> after <strong> ${numberOfYears} </strong> years with an average annual inflation rate of <strong> ${(inflationRate * 100).toFixed(2)}% </strong> will be same as that of <strong> ${presentValue} </strong> today!</p>`;
    document.getElementById("result").innerHTML = resultText;
}

// Function to reset input values and result
function resetValues() {
    document.getElementById("futureValue").value = "";
    document.getElementById("inflationRate").value = "";
    document.getElementById("numberOfYears").value = "";
    document.getElementById("result").innerHTML = "";
}
