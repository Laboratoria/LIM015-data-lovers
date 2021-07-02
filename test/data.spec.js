import { sortData } from '../src/data.js';


describe('orderBy test', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns `asc orderBy test`', () => {
    const data = [
      {
        "title": "Kiki's Delivery Service",
        "release_date": "1989",
        "rt_score": "96",
      },
      {
        "title": "Castle in the Sky",
        "release_date": "1986",
        "rt_score": "95",
      },
      {
        "title": "My Neighbor Totoro",
        "release_date": "1988",
        "rt_score": "93",
      }
    ];
    const sortBy = 'title';
    const sortOrder = 'asc';
    const result = [
      {
        "title": "Castle in the Sky",
        "release_date": "1986",
        "rt_score": "95",
      },
      {
        "title": "Kiki's Delivery Service",
        "release_date": "1989",
        "rt_score": "96",
      },
      {
        "title": "My Neighbor Totoro",
        "release_date": "1988",
        "rt_score": "93",
      }
    ];
    expect(sortData(data,sortBy,sortOrder)).toEqual(result);
  });
  it('returns `desc orderBy test`', () => {
    const data = [
      {
        "title": "Kiki's Delivery Service",
        "release_date": "1989",
        "rt_score": "96",
      },
      {
        "title": "Castle in the Sky",
        "release_date": "1986",
        "rt_score": "95",
      },
      {
        "title": "My Neighbor Totoro",
        "release_date": "1988",
        "rt_score": "93",
      }
    ];
    const sortBy = 'rt_score';
    const sortOrder = 'desc';
    const result = [
      {
        "title": "Kiki's Delivery Service",
        "release_date": "1989",
        "rt_score": "96",
      },
      {
        "title": "Castle in the Sky",
        "release_date": "1986",
        "rt_score": "95",
      },
      {
        "title": "My Neighbor Totoro",
        "release_date": "1988",
        "rt_score": "93",
      }

    ];
    expect(sortData(data,sortBy,sortOrder)).toEqual(result);
  });
});
