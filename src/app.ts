import express from 'express';
const app = express();
const port = 3000;
import { StringCalculator } from './StringCalculator';

const calculator = new StringCalculator();
const result = calculator.calculate("//;\n1;2");
console.log(result); // output: 3

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});