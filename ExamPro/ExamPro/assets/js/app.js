// ExamPro — Main App Controller
const App = {
  currentUser: null,
  currentExam: null,

  init() {
    const saved = localStorage.getItem(CONSTANTS.STORAGE_KEYS.USER);
    if (saved) {
      this.currentUser = JSON.parse(saved);
      navigate('dashboard');
    } else {
      navigate('login');
    }
  },

  setUser(user) {
    this.currentUser = user;
    localStorage.setItem(CONSTANTS.STORAGE_KEYS.USER, JSON.stringify(user));
  },

  logout() {
    localStorage.clear();
    this.currentUser = null;
    navigate('login');
  }
};

document.addEventListener('DOMContentLoaded', () => App.init());
