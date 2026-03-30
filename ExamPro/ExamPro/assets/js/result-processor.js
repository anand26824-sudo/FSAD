// ExamPro — Result Processor
const ResultProcessor = {
  process(questions, answers, examMeta) {
    let correct = 0, wrong = 0, skipped = 0, marks = 0;

    questions.forEach((q, i) => {
      if (answers[i] === null) skipped++;
      else if (answers[i] === q.ans) { correct++; marks += (q.marks || 3); }
      else wrong++;
    });

    const total = examMeta.totalMarks || questions.length * 3;
    const pct = Math.round((marks / total) * 100);
    const grade = pct >= 85 ? 'A' : pct >= 70 ? 'B' : pct >= 55 ? 'C' : 'D';

    return { correct, wrong, skipped, marks, total, pct, grade,
      passed: pct >= (CONFIG.passMark || 40),
      timestamp: new Date().toISOString()
    };
  },

  save(result) {
    const all = JSON.parse(localStorage.getItem(CONSTANTS.STORAGE_KEYS.RESULTS) || '[]');
    all.push(result);
    localStorage.setItem(CONSTANTS.STORAGE_KEYS.RESULTS, JSON.stringify(all));
  }
};
