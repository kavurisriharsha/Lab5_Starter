// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('valid: Balls69', () => {
  expect(isStrongPassword('Balls69')).toBe(true);
});

test('valid: balls_69', () => {
  expect(isStrongPassword('balls_69')).toBe(true);
});

test('invalid: 69balls', () => {
  expect(isStrongPassword('69balls')).toBe(false);
});

test('invalid: b', () => {
  expect(isStrongPassword('b')).toBe(false);
});


test('valid: 12/12/2020', () => {
  expect(isDate('12/12/2020')).toBe(true);
});

test('valid: 1/1/2020', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('invalid: 12/12/20', () => {
  expect(isDate('12/12/20')).toBe(false);
});

test('invalid: 12/12/20200', () => {
  expect(isDate('12/12/20200')).toBe(false);
});

test('valid: #000', () => {
  expect(isHexColor('#000')).toBe(true);
});

test('valid: abcdef', () => {
  expect(isHexColor('abcdef')).toBe(true);
});

test('invalid: #0000', () => {
  expect(isHexColor('#0000')).toBe(false);
});

test('invalid: ggg', () => {
  expect(isHexColor('ggg')).toBe(false);
});