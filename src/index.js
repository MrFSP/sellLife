import fs from 'fs';
import readlineSync from 'readline-sync';
import renderMatrixOfSells from './lib/renderer';
import { createMatrixOfCells, createNewStateOfMatrix } from './lib/matrix';

const maxMatrixSideSize = 15;
const timeoutOfProgramm = 50; // in seconds

const isOversizeMatrix = (width, height) => (width > maxMatrixSideSize
  || height > maxMatrixSideSize);

export default (pathToFile) => {
  console.clear();
  let currentMatrix;
  const isFile = fs.existsSync(pathToFile);
  if (isFile) {
    const data = fs.readFileSync(pathToFile, 'utf-8');
    currentMatrix = JSON.parse(data);
  } else {
    console.log('You did not specify a file path or path to file is incorrect.');
    console.log('Programm will generate start matrix state.');
    const widthOfMatrix = readlineSync.question(`Type width of matrix(max = ${maxMatrixSideSize}): `);
    const heightOfMatrix = readlineSync.question(`Type height of matrix(max = ${maxMatrixSideSize}): `);
    currentMatrix = isOversizeMatrix(widthOfMatrix, heightOfMatrix)
      ? null : createMatrixOfCells(widthOfMatrix, heightOfMatrix);
  }

  if (currentMatrix === null) {
    console.log('Matrix is too big. Restart the programm.');
    return;
  }

  console.clear();
  console.log('\nStart state of sell matrix:\n');
  console.log(renderMatrixOfSells(currentMatrix));
  setTimeout(() => {
    const id = setInterval(() => {
      console.clear();
      console.log('\nStarted!\t"1" - alive\t"0" - dead\tPress "Ctrl + c" to exit\n');
      const newStateOfMatrix = createNewStateOfMatrix(currentMatrix);
      console.log(renderMatrixOfSells(newStateOfMatrix));
      return currentMatrix;
    }, 1000);
    setTimeout(() => clearInterval(id), timeoutOfProgramm * 1000);
  }, 3000);
};
