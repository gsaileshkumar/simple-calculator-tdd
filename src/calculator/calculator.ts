const add = (stringExp: string) => {
  if (typeof stringExp === 'undefined') {
    throw new Error('Input is undefined');
  }
    
  if (stringExp === '') {
    return 0;
  }

  let delimiter = /[,\n]/;
  let numbersPart = stringExp;

  if (stringExp.startsWith('//')) {
    const delimiterEndIndex = stringExp.indexOf('\n');
    if (delimiterEndIndex !== -1) {
      const customDelimiter = stringExp.substring(2, delimiterEndIndex);
      const escapedDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      delimiter = new RegExp(escapedDelimiter);
      numbersPart = stringExp.substring(delimiterEndIndex + 1);
    }
  }
    
  const numbers = numbersPart.split(delimiter)
    .map(num => num.trim())
    .filter(num => num !== '')
    .map(num => {
      const parsed = parseFloat(num);
      if (isNaN(parsed)) {
        throw new Error(`Invalid number: ${num}`);
      }
      return parsed;
    });
    
  return numbers.reduce((sum, num) => sum + num, 0); 
}

export default { add }