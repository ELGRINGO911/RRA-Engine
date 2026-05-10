// AI Engine - Keyword Detection and Toxicity Detection

// Keyword Detection for AI
const keywordPatterns = {
  greeting: ['hola', 'hello', 'hi', 'buenos días', 'buenas noches'],
  help: ['ayuda', 'help', 'soporte', 'asistencia'],
  toxicity: ['insulto', 'bad word', 'spam', 'hate']
};

// Detect keywords in text
function detectKeywords(text) {
  const lowerText = text.toLowerCase();
  const detectedKeywords = [];
  
  for (const [category, keywords] of Object.entries(keywordPatterns)) {
    for (const keyword of keywords) {
      if (lowerText.includes(keyword)) {
        detectedKeywords.push({ category, keyword });
      }
    }
  }
  
  return detectedKeywords;
}

// Detect toxic content
function detectToxicity(text) {
  const toxicPatterns = [
    /insultos?/gi,
    /palabras prohibidas/gi,
    /spam/gi
  ];
  
  return toxicPatterns.some(pattern => pattern.test(text));
}

module.exports = {
  detectKeywords,
  detectToxicity,
  keywordPatterns
};