// ExamPro — Authentication
function login(name, rollId, dept) {
  if (!name || !rollId || !dept) return { success: false, msg: 'All fields required' };
  const user = { name, id: rollId, dept, loginAt: new Date().toISOString() };
  App.setUser(user);
  return { success: true };
}

function logout() { App.logout(); }

function isLoggedIn() { return !!localStorage.getItem(CONSTANTS.STORAGE_KEYS.USER); }
