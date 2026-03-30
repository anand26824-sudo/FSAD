// ExamPro App Configuration
const CONFIG = {
  appName: 'ExamPro',
  version: '1.0.0',
  apiBase: 'http://localhost:3000/api',
  sessionTimeout: 3600,
  maxAttempts: 3,
  passMark: 40,
  grades: {
    A: { min: 85, label: 'Outstanding', color: '#10b981' },
    B: { min: 70, label: 'Great',       color: '#00d9ff' },
    C: { min: 55, label: 'Average',     color: '#f59e0b' },
    D: { min: 0,  label: 'Below Pass',  color: '#ef4444' }
  }
};
