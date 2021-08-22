const quizForm = document.querySelector('#quiz-form');
const result = document.querySelector('#result');

const solutions = ['D', 'C', 'A', 'C', 'B', 'D'];

quizForm.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0, index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()) {
        if(value === solutions[index]) {
            score++;
        }
        index++;
    }

    result.innerText = `You scored ${score} out of ${solutions.length}`;
});