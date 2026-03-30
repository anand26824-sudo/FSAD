// Basic answer hashing (client-side obfuscation)
const Encryption = {
  hash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h << 5) - h + str.charCodeAt(i);
    return (h >>> 0).toString(16);
  },
  encode(answers) { return btoa(JSON.stringify(answers)); },
  decode(encoded) { try { return JSON.parse(atob(encoded)); } catch { return []; } }
};
