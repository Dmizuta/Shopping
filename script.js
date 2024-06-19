function calculateTotalCost(item) {
    const price = parseFloat(document.getElementById(`price${item}`).value) || 0;
    const quantity = parseFloat(document.getElementById(`quantity${item}`).value) || 0;
    const totalCost = (price * quantity).toFixed(2);
    document.getElementById(`totalCost${item}`).textContent = totalCost;
}

function compareItems() {
    // Calculate and display price/quantity ratios
    const items = ['A', 'B', 'C', 'D', 'E'];

    items.forEach(item => {
        const price = parseFloat(document.getElementById(`price${item}`).value) || 0;
        const quantity = parseFloat(document.getElementById(`quantity${item}`).value) || 0;
        const ratio = (price / quantity).toFixed(2);
        document.getElementById(`ratio${item}`).textContent = ratio;
    });

    // Compare items based on the ratios (example: find item with highest ratio)
    let comparisonResult = '';
    let maxRatio = 0;
    let maxItem = '';

    items.forEach((item, index) => {
        const ratio = parseFloat(document.getElementById(`ratio${item}`).textContent);
        if (ratio > maxRatio) {
            maxRatio = ratio;
            maxItem = `Item ${item}`;
        }
    });

    comparisonResult = `The best value for money is ${maxItem} with a ratio of ${maxRatio} R$/unit.`;

    // Display comparison result
    document.getElementById('comparisonResult').textContent = comparisonResult;
}
