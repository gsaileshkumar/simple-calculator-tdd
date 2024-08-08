const add = (stringExp: string) => {
  if (typeof stringExp === 'undefined') {
    throw new Error('Input is undefined');
  }
    
  if (stringExp === '') {
    return 0;
  }
    
  const numbers = stringExp.split(/[,|\n]/)
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