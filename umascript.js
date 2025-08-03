const cards = [];

document.getElementById("cardForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const friendship_bonus = document.getElementById("friendship_bonus").value;
    const mood_effect = document.getElementById("mood_effect").value;
    const training_effectiveness = document.getElementById("training_effectiveness").value;
    const specialty_priority = document.getElementById("speciality_priority").value;
    const stat_bonus_input = document.getElementById("stat_bonus").value.trim();

    const stat_bonus = stat_bonus_input
        ? stat_bonus_input
            .split(/[\s,]+/)
            .map(s => s.trim())
            .filter(s => s)
            .map(Number)
            .filter(n => !isNaN(n))
        : [0, 0, 0, 0, 0];

    const card_type = document.getElementById("card_type").value;

    cards.push({ name, friendship_bonus, mood_effect, training_effectiveness, specialty_priority, stat_bonus, card_type });

    document.getElementById("jsonOutput").value = JSON.stringify(cards, null, 2);
    this.reset();

    document.getElementById("resetBtn").addEventListener("click", () => {
        // Only clear the JSON output, not the input fields
        document.getElementById("jsonOutput").value = '';
    });

    const inputs = Array.from(document.querySelectorAll('#cardForm input'));

    inputs.forEach((input, index) => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const next = inputs[index + 1];
                if (next) {
                    next.focus();
                } else {
                    // If it's the last input, optionally submit or focus the button
                    document.querySelector('button[type="submit"]').focus();
                }
            }
        });
    });
});