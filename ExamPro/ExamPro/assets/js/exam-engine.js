// ExamPro — Exam Engine
const ExamEngine = {
  exam: null,
  questions: [],
  answers: [],
  currentIndex: 0,

  load(exam, questions) {
    this.exam = exam;
    this.questions = questions;
    this.answers = new Array(questions.length).fill(null);
    this.currentIndex = 0;
  },

  answer(optionIndex) { this.answers[this.currentIndex] = optionIndex; },

  next() { if (this.currentIndex < this.questions.length - 1) this.currentIndex++; },
  prev() { if (this.currentIndex > 0) this.currentIndex--; },
  goTo(i) { this.currentIndex = i; },

  current() { return this.questions[this.currentIndex]; },
  answeredCount() { return this.answers.filter(a => a !== null).length; },
  progress() { return ((this.currentIndex + 1) / this.questions.length) * 100; }
};
