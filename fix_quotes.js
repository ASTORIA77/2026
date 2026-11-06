const fs = require('fs');
let content = fs.readFileSync('data.js', 'utf8');
let result = '';
let inQuote = false;
for (let i = 0; i < content.length; i++) {
  const c = content[i];
  if (c === '\u201c' || c === '\u201d' || c === '"') {
    if (inQuote) {
      result += '\u201d'; // right double quote
      inQuote = false;
    } else {
      result += '\u201c'; // left double quote
      inQuote = true;
    }
  } else {
    result += c;
  }
}
fs.writeFileSync('data.js', result);
console.log('Fixed quotes');
