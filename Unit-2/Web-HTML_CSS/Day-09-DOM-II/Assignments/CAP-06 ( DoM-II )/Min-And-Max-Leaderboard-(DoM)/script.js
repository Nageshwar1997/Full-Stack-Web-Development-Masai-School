let currentScore = '';
        let minScore = null;
        let maxScore = null;

        function appendToScore(number) {
            currentScore += number;
            document.getElementById('current-score').textContent = currentScore;
        }

        function resetScore() {
            // currentScore = '';
            document.getElementById('current-score').textContent = '';
        }

        function enterScore() {
            if (currentScore != '') {
                currentScore = parseInt(currentScore);

                if (minScore === null || currentScore < minScore) {
                    minScore = currentScore;
                    document.getElementById('min-score').textContent = minScore;
                }

                if (maxScore === null || currentScore > maxScore) {
                    maxScore = currentScore;
                    document.getElementById('max-score').textContent = maxScore;
                }

                resetScore();
            }
        }