import { shape, string, number } from 'prop-types';

export const bookSelectedPropType = shape({
  name: string,
  summary: string,
  quantity: number
});

export const booksPropType = shape({
  author: string,
  id: number,
  image: string,
  name: string,
  summary: string,
  year: number
});
