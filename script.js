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

// Function to redirect to the Inflation Value Calculator page
function redirectToInflationCalculator() {
    window.location.href = 'inflation-calculator.html'; 
}

// Function to redirect to the Percentage Increase Calculator page
function redirectToPercentageIncreaseCalculator() {
    window.location.href = 'percentage-increase-calculator.html'; 
}

function redirectToQuantityCostCalculator() {
    window.location.href = 'quantity-cost-calculator.html';
}

// Function to calculate the percentage increase
function calculatePercentageIncrease() {
    // Get the input values
    const startingValue = document.getElementById("startingValue").value;
    const finalValue = document.getElementById("finalValue").value;

    // Check if both inputs are valid numbers
    if (isNaN(startingValue) || isNaN(finalValue)) {
        alert("Please enter valid numbers for both starting and final values.");
        return;
    }

    // Calculate the percentage increase
    const percentageIncrease = ((finalValue - startingValue) / startingValue) * 100;

    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<strong>${startingValue}</strong> to <strong>${finalValue}</strong> is a percentage change of <strong>${percentageIncrease.toFixed(2)}%</strong>`;
}

// Function to reset input values and result
function resetPIValues() {
    document.getElementById("startingValue").value = "";
    document.getElementById("finalValue").value = "";
    document.getElementById("result").innerHTML = "";
}

function calculateProportionalValue() {
    // Get values from input fields
    const knownQuantity = parseFloat(document.getElementById('knownQuantity').value);
    const knownCost = parseFloat(document.getElementById('knownCost').value);
    const desiredQuantity = parseFloat(document.getElementById('desiredQuantity').value);

    // Check if values are valid numbers
    if (isNaN(knownQuantity) || isNaN(knownCost) || isNaN(desiredQuantity)) {
        alert('Please enter valid numeric values.');
        return;
    }

    // Calculate cost for the desired quantity
    	const costForDesiredQuantity = ((desiredQuantity / knownQuantity) * knownCost).toFixed(2);

    // Display the result
	const resultElement = document.getElementById("result");
    	resultElement.innerHTML = `<strong> ${costForDesiredQuantity} </strong>  <br> If  ${knownQuantity}  →  ${desiredQuantity} , then  ${desiredQuantity}  →  ${costForDesiredQuantity} `;
    
}

function resetPVValues() {
	document.getElementById("knownQuantity").value = "";
   	document.getElementById("knownCost").value = "";
	document.getElementById("desiredQuantity").value = "";
    	document.getElementById("result").innerHTML = "";
}

