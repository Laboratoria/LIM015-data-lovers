import { setMoviesTitle, alphabeticOrder} from '../src/data.js';


describe('setMoviesTitle', () => {
  it('is a function', () => {
    expect(typeof setMoviesTitle).toBe('function');
  });

  it('returns `setMoviesTitle`', () => {
    expect(setMoviesTitle()).toBe('setMoviesTitle');
  });
});


describe('alphabeticOrder', () => {
  it('is a function', () => {
    expect(typeof alphabeticOrder).toBe('function');
  });

  it('returns `alphabeticOrder`', () => {
    expect(alphabeticOrder()).toBe('alphabeticOrder');
  });
});