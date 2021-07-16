import { filtrarData, anotherExample } from '../src/data.js';


describe('filtrarData', () => {
  it('is a function', () => {
    expect(typeof filtrarData).toBe('function');
  });

  it('is a function', () => {
    expect(filtrarData()).toBe('function');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
