function generateRandomDigit() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    const resultElement = document.getElementById('result');

    if (isNaN(minValue) || isNaN(maxValue)) {
        resultElement.innerText = "Please enter valid numbers!";
        return;
    }

    if (minValue > maxValue) {
        resultElement.innerText = "Minimum value must be less than maximum value!";
        return;
    }

    const randomDigit = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    resultElement.innerText = `Random Number: ${randomDigit}`;
}
