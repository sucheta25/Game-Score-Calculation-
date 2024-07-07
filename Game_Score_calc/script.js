function calculateAverage() {
    const scoresInput = document.getElementById('scores').value;
    const scoresArray = scoresInput.split(',').map(score => parseFloat(score.trim()));

    if (scoresArray.length === 0 || scoresArray.includes(NaN)) {
        document.getElementById('result').innerText = "Please enter valid scores.";
        return;
    }

    const total = scoresArray.reduce((acc, score) => acc + score, 0);
    const average = total / scoresArray.length;

    document.getElementById('result').innerHTML = `Average Score: ${average.toFixed(2)}`;
    addToHistory(scoresInput, average.toFixed(2));
}

function addToHistory(scores, average) {
    const historyList = document.getElementById('history-list');
    const newHistoryItem = document.createElement('li');
    newHistoryItem.textContent = `Scores: ${scores} | Average: ${average}`;
    historyList.appendChild(newHistoryItem);
}
