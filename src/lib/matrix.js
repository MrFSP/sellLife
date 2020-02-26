const getSellStatus = () => (Math.floor(Math.random() * 2) === 1 ? 'alive' : 'dead');

const createSell = (xPos, yPos, sellStatus) => ({
  x: xPos,
  y: yPos,
  status: sellStatus,
});

export const createMatrixOfCells = (width, height) => {
  const matrix = [];
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const sellStatus = getSellStatus();
      matrix.push(createSell(x, y, sellStatus));
    }
  }

  return matrix;
};

const getNeighbours = (sell, matrix) => {
  const { x, y } = sell;
  const filtredMatrix = matrix
    .filter((currentSell) => ((Math.abs(currentSell.x - x) <= 1)
      && (Math.abs(currentSell.y - y) <= 1)))
    .filter((currentSell) => currentSell !== sell);
  return filtredMatrix;
};

const getNewSellStatus = (sell, matrix) => {
  const countOfAliveSells = getNeighbours(sell, matrix)
    .filter((currentSell) => currentSell.status === 'alive')
    .length;
  switch (sell.status) {
    case 'alive': {
      return (countOfAliveSells === 2 || countOfAliveSells === 3) ? 'alive' : 'dead';
    }
    case 'dead': {
      return countOfAliveSells === 3 ? 'alive' : 'dead';
    }
    default: {
      throw new Error('Sell status is not defined');
    }
  }
};

export const createNewStateOfMatrix = (matrix) => matrix.reduce((acc, sell) => {
  const newSell = sell;
  newSell.status = getNewSellStatus(sell, matrix);
  return [...acc, newSell];
}, []);
