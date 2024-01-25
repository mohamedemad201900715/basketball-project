const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})
sr.reveal(` .home .holder .btn`, { delay: 200, origin: 'top' })
sr.reveal(` .home .holder .image, .holder2 `, { delay: 600, origin: 'top' })
sr.reveal(`.choice-hold, .image-back-home, .instruction-text`, { delay: 700, origin: 'right' })
sr.reveal(`.btn-exam`, { delay: 600, origin: 'bottom' })


// Answer of Question
const choiceHolds = document.querySelectorAll('.choice-hold');

choiceHolds.forEach(choiceHold => {
    choiceHold.addEventListener('click', () => {
        const input = choiceHold.querySelector('input[type="radio"]');

        // Uncheck all radio buttons in the same group
        document.querySelectorAll('input[name="' + input.name + '"]').forEach(otherInput => {
            if (otherInput !== input) {
                otherInput.checked = false;
                // Remove the "selected" class for all other choice-holds
                const otherChoiceHold = otherInput.closest('.choice-hold');
                if (otherChoiceHold) {
                    otherChoiceHold.classList.remove('selected');
                }
            }
        });

        input.checked = !input.checked;

        // Toggle the "selected" class for styling
        choiceHold.classList.toggle('selected', input.checked);
    });
});
// 


// Exam answer
const answerParagraph = document.querySelector(".your-answer");
const answerButton = document.querySelector(".btn-answer");
let isFirstClick = true;
answerCorrect= true;
answerButton.addEventListener('click', () => {
    if (isFirstClick) {
    if(answerCorrect){
    var newElement = document.createElement("p");
    newElement.textContent = "الاجابه صحيحه";
    newElement.style.color = 'green'
    answerParagraph.appendChild(newElement);
}
else{
    var newElement = document.createElement("p");
    newElement.textContent = "الاجابه خاطئه";
    newElement.style.color = 'red'
    answerParagraph.appendChild(newElement);
}
    answerButton.textContent = "الانتقال للسؤال التالي"
    var newAnchorElement = document.createElement("a");
    // newAnchorElement.setAttribute("href", "../course.html"); //put link when questions are End
    newAnchorElement.setAttribute("href", "");
    newAnchorElement.appendChild(answerButton);
    answerParagraph.parentNode.appendChild(newAnchorElement);
    isFirstClick= false;
}

});