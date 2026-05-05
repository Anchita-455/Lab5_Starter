// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test("valid emails", () => {
  expect(isEmail("test@example.com")).toBe(true);
  expect(isEmail("abc123@yahoo.com")).toBe(true);
});

test("invalid emails", () => {
  expect(isEmail("test_example.com")).toBe(false);
  expect(isEmail("@yahoo.com")).toBe(false);
});

test("valid phone numbers", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test("valid phone numbers", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});

test("invalid phone numbers", () => {
  expect(isPhoneNumber("1234567890")).toBe(false);  
  expect(isPhoneNumber("12-34567890")).toBe(false); 
});

test("valid strong passwords", () => {
  expect(isStrongPassword("Abc1")).toBe(true);
  expect(isStrongPassword("A_user123")).toBe(true);
});

test("invalid strong passwords", () => {
  expect(isStrongPassword("1abc")).toBe(false);
  expect(isStrongPassword("ab!cde")).toBe(false);
});

test("valid hex colors", () => {
  expect(isHexColor("#A1B2C3")).toBe(true); 
  expect(isHexColor("fff")).toBe(true);    
});

test("invalid hex colors", () => {
  expect(isHexColor("#GGGGGG")).toBe(false); 
  expect(isHexColor("#1234")).toBe(false);   
});

test("valid dates", () => {
  expect(isDate("1/2/2023")).toBe(true);
  expect(isDate("12/25/2023")).toBe(true);
});

test("invalid dates", () => {
  expect(isDate("123/45/2023")).toBe(false);
  expect(isDate("12/25/23")).toBe(false);
});