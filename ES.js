document.addEventListener('DOMContentLoaded', () => {
    console.log('Bienvenue sur notre page Énergie Solaire !');
});


document.getElementById('calculate-savings').addEventListener('click', function () {
    const monthlyBill = parseFloat(document.getElementById('monthly-bill').value);
    const sunHours = parseFloat(document.getElementById('sun-hours').value);

    if (!monthlyBill || !sunHours) {
        alert("Veuillez entrer des valeurs valides pour tous les champs.");
        return;
    }

    // Supposons que l'énergie solaire réduise la facture de 60%
    const savingsPercentage = 0.6; 
    const yearlySavings = (monthlyBill * 12) * savingsPercentage;

    // Supposons que chaque heure de soleil supplémentaire augmente l'économie de 2%
    const extraSavings = yearlySavings * (sunHours * 0.02);

    const totalSavings = yearlySavings + extraSavings;

    // Affichage des résultats
    const resultDiv = document.getElementById('simulation-result');
    resultDiv.textContent = `Vous pourriez économiser environ ${totalSavings.toFixed(2)} F CFA par an en utilisant l'énergie solaire !`;
});
