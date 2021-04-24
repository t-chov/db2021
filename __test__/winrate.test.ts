import { invertDatapoints } from '@/winrate'

describe('test to invert datapoints', () => {
  test('invertDatapoint', () => {
    const datapoints = [
      {
        name: 'sample1',
        pearls: 0.5,
        baystars: 1,
        unions: 0.25,
      },
      {
        name: 'sample2',
        pearls: 0,
        baystars: 0.75,
        unions: 0.3,
      },
    ]

    const expected = [
      {
        name: 'sample1',
        pearls: 0.5,
        baystars: 0,
        unions: 0.75,
      },
      {
        name: 'sample2',
        pearls: 1,
        baystars: 0.25,
        unions: 0.7,
      },
    ]

    const actual = invertDatapoints(datapoints)
    expect(actual).toEqual(expected)
  })
})
