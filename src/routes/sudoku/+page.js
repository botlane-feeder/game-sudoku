const sudokuArray=[
  [
    [-1,-1,-1,-1,7,6,-1,-1,2],
    [-1,-1,2,-1,-1,-1,-1,-1,5],
    [6,3,4,1,2,-1,7],
    [-1,1,-1,-1,-1,-1,-1,-1,5],
    [-1,2,3,-1,8,-1,9,4],
    [9,-1,-1,-1,-1,-1,-1,1],
    [-1,-1,1,-1,2,7,4,9,3],
    [2,-1,-1,-1,-1,-1,7],
    [5,-1,-1,4,8]
  ],
  [
    [-1,5,9,8,7,6,3,4,2],
    [8,7,2,4,3,9,6,1,5],
    [6,3,4,1,2,5,7,9,8],
    [7,1,8,9,6,4,2,3,5],
    [5,2,3,1,8,7,9,4,6],
    [9,4,6,3,5,2,8,1,7],
    [6,8,1,5,2,7,4,9,3],
    [2,9,4,3,6,1,7,5,8],
    [5,7,3,4,8,9,2,6,1]
  ]
];

export const load = async () => {

  return {sudoku : sudokuArray[0]};
}