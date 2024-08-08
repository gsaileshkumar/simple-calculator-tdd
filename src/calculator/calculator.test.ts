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
    expect(add('3,-6')).toBe(-3)
    expect(add('-10,-20')).toBe(-30)
    expect(add('-10,10')).toBe(0)
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
    expect(add('3,-6,20,3')).toBe(20)
    expect(add('-10,-20,-2,-10')).toBe(-42)
    expect(add('-10,10,20,-20,30,-30')).toBe(0)
  })
  
  test('should return the correct sum for input string delimited by new lines', () => {
    expect(add('1\n2,3')).toBe(6);
    expect(add('1\n2\n3')).toBe(6);
    expect(add('1,\n2,3')).toBe(6);
    expect(add('\n1,2,3')).toBe(6);
    expect(add('\n\n1,2,3')).toBe(6);
    expect(add('\n')).toBe(0);
  });

})