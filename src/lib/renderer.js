export default (matrix) => {
  const matrixImage = [];
  matrix.forEach((element) => {
    const { y, status } = element;
    const newElement = status === 'alive' ? '1\t' : '0\t';
    matrixImage[y] = `${matrixImage[y] || ''}${newElement}`;
  });
  return matrixImage.join('\n\n');
};
