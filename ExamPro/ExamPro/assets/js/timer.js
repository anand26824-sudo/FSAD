// ExamPro — Timer Module
const Timer = {
  interval: null,
  timeLeft: 0,
  onTick: null,
  onExpire: null,

  start(seconds, onTick, onExpire) {
    this.timeLeft = seconds;
    this.onTick = onTick;
    this.onExpire = onExpire;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.timeLeft--;
      if (this.onTick) this.onTick(this.timeLeft);
      if (this.timeLeft <= 0) { clearInterval(this.interval); if (this.onExpire) this.onExpire(); }
    }, 1000);
  },

  stop() { clearInterval(this.interval); },

  format(secs) {
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${m}:${s}`;
  }
};
