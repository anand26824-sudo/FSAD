// ExamPro — Utility Functions
const Utils = {
  formatTime(secs) {
    const m = Math.floor(secs / 60), s = secs % 60;
    return `${m}m ${s}s`;
  },
  formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' });
  },
  initials(name) {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  },
  gradeColor(grade) {
    const colors = { A:'#10b981', B:'#00d9ff', C:'#f59e0b', D:'#ef4444' };
    return colors[grade] || '#6b7280';
  }
};
