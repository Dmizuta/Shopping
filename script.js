function calculateRatio(item) {
    const price = parseFloat(document.getElementById(`price${item}`).value) || 0;
    const quantity = parseFloat(document.getElementById(`quantity${item}`).value) || 1; // Default to 1 if quantity is not provided
    const ratio = (price / quantity).toFixed(2);
    document.getElementById(`ratio${item}`).textContent = ratio;
}

function compareItems() {
    const items = ['A', 'B', 'C', 'D', 'E'];

    let minTotalCost = Infinity;
    let bestItem = '';

    items.forEach(item => {
        const price = parseFloat(document.getElementById(`price${item}`).value) || 0;
        const quantity = parseFloat(document.getElementById(`quantity${item}`).value) || 1; // Default to 1 if quantity is not provided
        const totalCost = price * quantity;

        if (totalCost < minTotalCost) {
            minTotalCost = totalCost;
            bestItem = `Item ${item}`;
        }

        const ratio = (price / quantity).toFixed(2);
        document.getElementById(`ratio${item}`).textContent = ratio;
    });

    const comparisonResult = `The best value for money is ${bestItem} with a total cost of ${minTotalCost.toFixed(2)} R$.`;

    document.getElementById('comparisonResult').textContent = comparisonResult;
}
