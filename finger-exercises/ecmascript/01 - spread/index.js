import { isArray } from './utils';

export function min(objExample) {
  if (arguments.length >= 1) {
    if (isArray(objExample)) {
      return Math.min(...objExample);
    }
    return Math.min(objExample);
  }
  return undefined;
}

export function copy(objExample) {
  if (isArray(objExample)) {
    return [...objExample];
  }
  return { ...objExample };
}

export function reverseMerge(arr1, arr2) {
  return [...arr2, ...arr1];
}

export function filterAttribs(objExample) {
  const { a, b, ...filterList } = objExample;
  return filterList;
}
