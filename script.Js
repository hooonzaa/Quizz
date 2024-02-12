function check() {
    const correctAnswers = ["Bezděk", "28", "Špagety", "Šachy", "Nikdy se neostříhá", "2019", "4h", "10", "Fire in the hall", "3"];
    let correctCount = 0;
    let incorrectCount = 0;
    let correctList = [];
    let incorrectList = [];

    for (let i = 1; i <= 10; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value.toLowerCase() === correctAnswers[i - 1].toLowerCase()) {
                correctCount++;
                correctList.push(`Otázka ${i}`);
            } else {
                incorrectCount++;
                incorrectList.push(`Otázka ${i}`);
            }
        }
    }

    let message = `Počet správných odpovědí: ${correctCount}\nPočet špatných odpovědí: ${incorrectCount}`;
    if (correctList.length > 0) {
        message += "\nSprávně na otázkách: " + correctList.join(", ");
    }
    if (incorrectList.length > 0) {
        message += "\nŠpatně na otázkách: " + incorrectList.join(", ");
    }

    alert(message);
}
function restart(){
    
        // It resets all radio buttons to unchecked state
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(button => {button.checked = false;});
    }

