import { Fraction } from '../src/utils/Fraction';
import { testSuite } from '../src/utils/TestSuite';

describe('core inheritance utilities', () => {
  it('simplifies and adds fractions', () => {
    const half = new Fraction(2, 4);
    expect(half.toString()).toBe('1/2');
    expect(half.add(new Fraction(1, 4)).toString()).toBe('3/4');
  });

  it('loads the test suite', () => {
    expect(Object.keys(testSuite.tests).length).toBeGreaterThan(0);
    expect(testSuite.tests.basic.length).toBeGreaterThan(0);
  });
});
