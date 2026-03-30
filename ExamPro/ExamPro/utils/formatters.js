// Data Formatters
const Formatters = {
  percent: n => `${n}%`,
  grade:   g => `Grade ${g}`,
  duration: m => `${m} min`,
  score: (got, total) => `${got} / ${total}`
};
