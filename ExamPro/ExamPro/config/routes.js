// Page Routes
const ROUTES = {
  login:       'pages/login.html',
  dashboard:   'pages/dashboard.html',
  exam:        'pages/exam.html',
  result:      'pages/result.html',
  review:      'pages/review.html',
  leaderboard: 'pages/leaderboard.html',
  adminDash:   'admin/dashboard/index.html',
  profile:     'student/profile/index.html'
};

function navigate(route) {
  window.location.href = ROUTES[route] || ROUTES.login;
}
