import { alphabeticOrder, alphabeticOrderLess, ratingScoreLess, ratingScore, getAverage, realeaseDateOld, lastestRealeaseDate } from '../src/data.js';

const data = [{
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "rt_score": "95",
  "release_date": "1986",
},
{
  "id": "90b72513-afd4-4570-84de-a56c312fdf81",
  "title": "The Cat Returns",
  "rt_score": "89",
  "release_date": "2002",
},
{
  "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
  "title": "Grave of the Fireflies",
  "rt_score": "97",
  "release_date": "1988",
}];

const sortedByTitleAscendant = [{
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "rt_score": "95",
  "release_date": "1986",
},
{
  "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
  "title": "Grave of the Fireflies",
  "rt_score": "97",
  "release_date": "1988",
},
{
  "id": "90b72513-afd4-4570-84de-a56c312fdf81",
  "title": "The Cat Returns",
  "rt_score": "89",
  "release_date": "2002",
},
]

const sortedByTitleDescendant = [{
  "id": "90b72513-afd4-4570-84de-a56c312fdf81",
  "title": "The Cat Returns",
  "rt_score": "89",
  "release_date": "2002",
},
{
  "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
  "title": "Grave of the Fireflies",
  "rt_score": "97",
  "release_date": "1988",
},
{
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "rt_score": "95",
  "release_date": "1986",
},
]

const averageOfRtScore = 93.666666666666667

const oldestReleaseDate = [{
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "rt_score": "95",
  "release_date": "1986",
},
{
  "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
  "title": "Grave of the Fireflies",
  "rt_score": "97",
  "release_date": "1988",
},
{
  "id": "90b72513-afd4-4570-84de-a56c312fdf81",
  "title": "The Cat Returns",
  "rt_score": "89",
  "release_date": "2002",
},
]

const recentReleaseDate = [{
  "id": "90b72513-afd4-4570-84de-a56c312fdf81",
  "title": "The Cat Returns",
  "rt_score": "89",
  "release_date": "2002",
},
{
  "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
  "title": "Grave of the Fireflies",
  "rt_score": "97",
  "release_date": "1988",
},
{
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "rt_score": "95",
  "release_date": "1986",
},
]


describe('ordenar por orden alfabetico', () => {
  it('is a function', () => {
    expect(typeof alphabeticOrder).toBe('function');
  });

  it('Ordena desde A a Z', () => {
    expect(alphabeticOrder(data)).toEqual(sortedByTitleAscendant);
  });
});

describe('ordenar por orden alfabetico', () => {
  it('is a function', () => {
    expect(typeof alphabeticOrderLess).toBe('function');
  });

  it('ordena desde la Z a la A', () => {
    expect(alphabeticOrderLess(data)).toEqual(sortedByTitleDescendant);
  });

});
// end of alphabetic order  

describe('ordena por rating score mas bajo a alto', () => {
  it('ratingScoreLess is a function', () => {
    expect(typeof ratingScoreLess).toBe('function');
  });

  it('Ordena desde menor a mayor rating', () => {
    const sortedByRatingAscendant = [
      {
        "id": "90b72513-afd4-4570-84de-a56c312fdf81",
        "title": "The Cat Returns",
        "rt_score": "89",
        "release_date": "2002",
      },
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "rt_score": "95",
        "release_date": "1986",
      },
      {
        "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
        "title": "Grave of the Fireflies",
        "rt_score": "97",
        "release_date": "1988",
      },
    ];
    expect(ratingScoreLess(data)).toEqual(sortedByRatingAscendant);

  });
});

describe('Ordena el rating score mas alto a bajo', () => {
  it('ratingScore is a function', () => {
    expect(typeof ratingScore).toBe('function');
  });

  it('Ordena desde mayor a menor rating', () => {
    const sortedByRatingDescendant = [
      {
        "id": "12cfb892-aac0-4c5b-94af-521852e46d6a",
        "title": "Grave of the Fireflies",
        "rt_score": "97",
        "release_date": "1988",
      },
      {
        "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
        "title": "Castle in the Sky",
        "rt_score": "95",
        "release_date": "1986",
      },
      {
        "id": "90b72513-afd4-4570-84de-a56c312fdf81",
        "title": "The Cat Returns",
        "rt_score": "89",
        "release_date": "2002",
      }
    ];
    expect(ratingScore(data)).toEqual(sortedByRatingDescendant);
  });
});
// end of rating score

describe('obtener el promedio de rating score', () => {
  it('is a function', () => {
    expect(typeof getAverage).toBe('function');
  });

  it('obtiene el promedio de rating score', () => {
    expect(getAverage(data)).toBe(averageOfRtScore);
  });
});

//end of reduce (getaverage)

describe('ordena release date de mas antiguo', () => {
  it('is a function', () => {
    expect(typeof realeaseDateOld).toBe('function');
  });

  it('obtiene el realease date antiguo a mas reciente', () => {
    expect(realeaseDateOld(data)).toEqual(oldestReleaseDate);
  });
});

describe('ordena el realease date mas reciente a antiguo', () => {
  it('is a function', () => {
    expect(typeof lastestRealeaseDate).toBe('function');
  });

  it('obtiene el realease date mas reciente a antiguo', () => {
    expect(lastestRealeaseDate(data)).toEqual(recentReleaseDate);
  });
});
//end of release date
