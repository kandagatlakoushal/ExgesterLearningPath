/**
 * Quiz Widget — Shared interactive component for lessons.
 *
 * Usage in HTML:
 *   <div class="quiz" data-quiz="unique-id">
 *     <p class="quiz-question">What does Either.right(x).map(f) return?</p>
 *     <ul class="quiz-options">
 *       <li><button data-answer="wrong">Left containing f(x)</button></li>
 *       <li><button data-answer="correct">Right containing f(x)</button></li>
 *       <li><button data-answer="wrong">Throws an exception</button></li>
 *       <li><button data-answer="wrong">An empty Optional</button></li>
 *     </ul>
 *     <div class="quiz-feedback"></div>
 *   </div>
 */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz').forEach(quiz => {
    const buttons = quiz.querySelectorAll('.quiz-options button');
    const feedback = quiz.querySelector('.quiz-feedback');
    let answered = false;

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (answered) return;
        answered = true;

        const isCorrect = btn.dataset.answer === 'correct';

        // Mark all buttons
        buttons.forEach(b => {
          b.disabled = true;
          if (b.dataset.answer === 'correct') {
            b.classList.add('correct');
          } else if (b === btn && !isCorrect) {
            b.classList.add('incorrect');
          }
        });

        // Show feedback
        if (feedback) {
          feedback.classList.add('show');
          if (isCorrect) {
            feedback.classList.add('correct');
            feedback.textContent = '✓ Correct! ' + (feedback.dataset.correct || '');
          } else {
            feedback.classList.add('incorrect');
            feedback.textContent = '✗ Not quite. ' + (feedback.dataset.incorrect || 'Look at the highlighted answer.');
          }
        }
      });
    });
  });
});
