import { isArray } from './utils';

export function min(...objExample) {
  if (objExample.length === 0) {
    return undefined;
  }

  const [item] = [...objExample];
  if (isArray(item)) {
    return Math.min(...item);
  }

  return Math.min(...objExample);
}

export function copy(objExample) {
  if (isArray(objExample)) {
    return [...objExample];
  }
  return { ...objExample };
}

export function reverseMerge(...objectExample) {
  const [arr1, arr2] = objectExample;
  return [...arr2, ...arr1];
}

export function filterAttribs(objExample) {
  const { a, b, ...filterList } = objExample;
  return filterList;
}
