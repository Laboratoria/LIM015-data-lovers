import { alphabeticOrder } from '../src/data.js';

describe('ordenar por filtros', () => {
  it('is a function', () => {
    expect(typeof alphabeticOrder).toBe('function');
  });

  it('Ordena desde a z', () => {
    const data = [{
      "title": "Castle in the Sky",
      "rt_score": "95",
      "release_date": "1986",
    },
    {
      "title": "My Neighbor Totoro",
      "rt_score": "93",
      "release_date": "1988",
    }];
    const result = ["Castle in the Sky", "My Neighbor Totoro"];
    expect(alphabeticOrder(data.title)).toEqual(result);
  });
});

// describe('alphabeticOrder', () => {
// //   it('is a function', () => {
// //     expect(typeof setMoviesTitle).toBe('function');
// //   });

// //   it('returns `setMoviesTitle`', () => {
// //     expect(setMoviesTitle()).toBe('setMoviesTitle');
// //   });
// // });


// // describe('alphabeticOrder', () => {
// //   it('is a function', () => {
// //     expect(typeof alphabeticOrder).toBe('function');
// //   });

// //   it('returns `alphabeticOrder`', () => {
// //     expect(alphabeticOrder()).toBe('alphabeticOrder');
// //   });
// // });