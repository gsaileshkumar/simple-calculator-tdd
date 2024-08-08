import calculator from "./calculator";
import {describe, test, expect} from 'vitest'

describe('Add functionality in calculator', () => {
  const { add } = calculator

  test('should throw error if arg is undefined', () => {
    // @ts-ignore for checking the negative test case
    expect(() => add()).toThrowError('Input is undefined')
  })

  test('should return 0 for empty string as arg', () => {
    expect(add('')).toBe(0)
  })

  test('should return the numeric value of the arg if single input is provided', () => {
    expect(add('3')).toBe(3)
  })

  test('should return the correct sum for the input string delimited by comma', () => {
    expect(add('3,6')).toBe(9)
    expect(add('1,11')).toBe(12)
    expect(add('1,0')).toBe(1)
  })

  test('should throw error if the inputs are not number', () => {
    expect(() => add('a')).toThrowError('Invalid number')
    expect(() => add('6,a')).toThrowError('Invalid number')
    expect(() => add('@@@,a23')).toThrowError('Invalid number')
    expect(() => add('@@@,5')).toThrowError('Invalid number')
    expect(() => add('as,5,234')).toThrowError('Invalid number')
    expect(() => add('234,23,$$$')).toThrowError('Invalid number')
  })
  
  test('should return the correct sum for any amount of numbers in input string delimited by comma', () => {
    expect(add('3,6,3')).toBe(12)
    expect(add('3,6,20,3')).toBe(32)
  })
  
  test('should return the correct sum for input string delimited by new lines', () => {
    expect(add('1\n2,3')).toBe(6);
    expect(add('1\n2\n3')).toBe(6);
    expect(add('1,\n2,3')).toBe(6);
    expect(add('\n1,2,3')).toBe(6);
    expect(add('\n\n1,2,3')).toBe(6);
    expect(add('\n')).toBe(0);
  });

  test('should handle custom delimiter specified in the string', () => {
    expect(add('//;\n1;2')).toBe(3);
    expect(add('//:\n7:8:9')).toBe(24);
    expect(add('//a\n7a8a9')).toBe(24);
  });
  
  test('should handle custom delimiter with special characters', () => {
    expect(add('//|\n4|5|6')).toBe(15);
    expect(add('//@\n1@2@3')).toBe(6);
    expect(add('//^\n4^5^6')).toBe(15);
  });

  test('should handle custom delimiter with new line', () => {
    expect(add('//;\n1;2;3')).toBe(6);
  });

  test('should throw error for invalid numbers with custom delimiter', () => {
    expect(() => add('//;\n1;a')).toThrowError('Invalid number');
  });

  test('should throw error for negative numbers', () => {
    expect(() => add('1,-2,3')).toThrowError('Negative numbers not allowed: -2');
    expect(() => add('1,-2\n-3')).toThrowError('Negative numbers not allowed: -2, -3');
    expect(() => add('//;\n-1;2;-3')).toThrowError('Negative numbers not allowed: -1, -3');
  });

})