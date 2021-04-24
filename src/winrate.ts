export interface WinrateDatapoint {
  name: string
  pearls: number
  baystars: number
  unions: number
}

export const WIN_RATE: WinrateDatapoint[] = [
  { name: 'Game 1', pearls: 0.0, baystars: 0.0, unions: 0.0 },
  { name: 'Game 2', pearls: 0.0, baystars: 0.0, unions: 0.0 },
  { name: 'Game 3', pearls: 0.333, baystars: 0.0, unions: 0.0 },
  { name: 'Game 4', pearls: 0.25, baystars: 0.0, unions: 0.0 },
  { name: 'Game 5', pearls: 0.2, baystars: 0.0, unions: 0.0 },
  { name: 'Game 6', pearls: 0.167, baystars: 0.0, unions: 0.0 },
  { name: 'Game 7', pearls: 0.143, baystars: 0.0, unions: 0.0 },
  { name: 'Game 8', pearls: 0.125, baystars: 0.0, unions: 0.0 },
  { name: 'Game 9', pearls: 0.111, baystars: 0.143, unions: 0.0 },
  { name: 'Game 10', pearls: 0.1, baystars: 0.25, unions: 0.0 },
  { name: 'Game 11', pearls: 0.182, baystars: 0.222, unions: 0.0 },
  { name: 'Game 12', pearls: 0.167, baystars: 0.3, unions: 0.0 },
  { name: 'Game 13', pearls: 0.154, baystars: 0.273, unions: 0.077 },
  { name: 'Game 14', pearls: 0.214, baystars: 0.25, unions: 0.071 },
  { name: 'Game 15', pearls: 0.2, baystars: 0.231, unions: 0.133 },
  { name: 'Game 16', pearls: 0.188, baystars: 0.214, unions: 0.188 },
  { name: 'Game 17', pearls: 0.188, baystars: 0.2, unions: 0.176 },
  { name: 'Game 18', pearls: 0.176, baystars: 0.188, unions: 0.222 },
  { name: 'Game 19', pearls: 0.167, baystars: 0.176, unions: 0.211 },
  { name: 'Game 20', pearls: 0.158, baystars: 0.167, unions: 0.25 },
  { name: 'Game 21', pearls: 0.15, baystars: 0.167, unions: 0.238 },
  { name: 'Game 22', pearls: 0.143, baystars: 0.167, unions: 0.273 },
  { name: 'Game 23', pearls: 0.182, baystars: 0.158, unions: 0.261 },
  { name: 'Game 24', pearls: 0.174, baystars: 0.15, unions: 0.25 },
  { name: 'Game 25', pearls: 0.167, baystars: 0.19, unions: 0.28 },
]

export function invertDatapoints(datapoints: WinrateDatapoint[]): WinrateDatapoint[] {
  return datapoints.map((datapoint) => {
    return {
      name: datapoint.name,
      pearls: 1 - datapoint.pearls,
      baystars: 1 - datapoint.baystars,
      unions: 1 - datapoint.unions,
    }
  })
}