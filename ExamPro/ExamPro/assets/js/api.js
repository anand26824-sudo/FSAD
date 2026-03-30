// ExamPro — API Wrapper (for future backend integration)
const API = {
  base: CONFIG?.apiBase || '/api',

  async get(endpoint) {
    try {
      const res = await fetch(`${this.base}/${endpoint}`);
      return await res.json();
    } catch (e) {
      console.warn('API unavailable, using local data', e);
      return null;
    }
  },

  async post(endpoint, body) {
    try {
      const res = await fetch(`${this.base}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      return await res.json();
    } catch (e) {
      console.warn('API unavailable', e);
      return null;
    }
  }
};
