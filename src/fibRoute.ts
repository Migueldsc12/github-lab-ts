// Endpoint for querying the fibonacci numbers
import {Request, Response} from 'express';
import { stringify } from 'ts-jest';
import { fibonacci } from './fib';

export default (req: Request, res: Response) => {
  const { num }  = req.params;

  const fibN: number = fibonacci(parseInt(num));
  let result = "fibonacci(" + stringify(num) + ") is " + stringify(fibN);

  if (fibN < 0) {
    result = "fibonacci(" + stringify(num) + ") is undefined";
  }

  res.send(result);
};
