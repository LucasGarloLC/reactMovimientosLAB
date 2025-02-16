import {
  isValidIban,
  isPositiveNumber,
  isDateAfterToday,
  isValidEmail,
  isNotFieldEmpty,
  isValueNotNullOrUndefined,
} from "../plain.validation";

describe("Plain validation", () => {
  describe("isValidIban", () => {
    it("should return true for a valid IBAN", () => {
      expect(isValidIban("GB82WEST12345698765432")).toBe(true);
    });
    it("should return false for an invalid IBAN", () => {
      expect(isValidIban("INVALIDIBAN")).toBe(false);
    });
  });
  describe("isPositiveNumber", () => {
    it("should return true for a positive number", () => {
      expect(isPositiveNumber(10)).toBe(true);
    });
    it("should return false for a non-positive number", () => {
      expect(isPositiveNumber(-5)).toBe(false);
      expect(isPositiveNumber(0)).toBe(false);
    });
  });
  describe("isDateAfterToday", () => {
    it("should return true for a date after today", () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 1);
      expect(isDateAfterToday(futureDate.toISOString())).toBe(true);
    });
    it("should return false for a date not after today", () => {
      const pastDate = new Date();
      pastDate.setDate(pastDate.getDate() - 1);
      expect(isDateAfterToday(pastDate.toISOString())).toBe(false);
    });
  });
  describe("isValidEmail", () => {
    it("should return true for a valid email", () => {
      expect(isValidEmail("test@example.com")).toBe(true);
    });
    it("should return false for an invalid email", () => {
      expect(isValidEmail("invalid-email")).toBe(false);
    });
  });
  describe("isNotFieldEmpty", () => {
    it("should return true for a non-empty field", () => {
      expect(isNotFieldEmpty("not empty")).toBe(true);
    });
    it("should return false for an empty field", () => {
      expect(isNotFieldEmpty("")).toBe(false);
    });
  });
  describe("isValueNotNullOrUndefined", () => {
    it("should return true for a non-null and non-undefined value", () => {
      expect(isValueNotNullOrUndefined("value")).toBe(true);
      expect(isValueNotNullOrUndefined(123)).toBe(true);
    });
    it("should return false for null or undefined", () => {
      expect(isValueNotNullOrUndefined(null)).toBe(false);
      expect(isValueNotNullOrUndefined(undefined)).toBe(false);
    });
  });
});
