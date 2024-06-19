function calculate() {
    const D4 = parseFloat(document.getElementById('D4').value);
    const D5 = parseFloat(document.getElementById('D5').value);
    const D6 = parseFloat(document.getElementById('D6').value);
    
    if (isNaN(D4) || isNaN(D5) || isNaN(D6)) {
        document.getElementById('result').textContent = 'Please enter valid numbers for all fields.';
        return;
    }
    
    const result = ((D6 / D5) - 1) * D5 * D4;
    
    document.getElementById('result').textContent = `Result: ${result}`;
}
