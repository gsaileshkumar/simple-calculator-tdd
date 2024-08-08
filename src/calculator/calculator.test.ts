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
  })
})