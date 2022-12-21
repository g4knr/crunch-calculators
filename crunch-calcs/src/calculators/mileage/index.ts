import * as helpers from '../helpers';
import { annualFigures } from './annualFigures';
import { inputs } from './inputs';
import { outputs } from './outputs';

export const mileage = (form: HTMLFormElement) => {
  console.log('mileage');
  if (!form) return;
  helpers.initCalc(form, annualFigures, inputs, outputs);
};
