import { formatDate, formatCurrency, slugify } from '../../src/utils/helpers';

describe('Utility Functions', () => {
  describe('formatDate', () => {
    test('formats date correctly', () => {
      const date = new Date('2023-12-25');
      expect(formatDate(date)).toContain('December');
    });

    test('handles invalid date', () => {
      expect(formatDate('invalid')).toBe('Invalid Date');
    });
  });

  describe('formatCurrency', () => {
    test('formats currency correctly', () => {
      expect(formatCurrency(100)).toBe('$100.00');
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
    });

    test('handles different currencies', () => {
      expect(formatCurrency(100, 'EUR')).toBe('€100.00');
    });
  });

  describe('slugify', () => {
    test('creates slug from text', () => {
      expect(slugify('Hello World')).toBe('hello-world');
      expect(slugify('Test & Special!')).toBe('test-special');
    });

    test('handles empty string', () => {
      expect(slugify('')).toBe('');
    });
  });
});
