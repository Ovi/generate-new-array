function generateNewArray(length, filler) {
  const isFillerUndefined = filler === undefined;

  if (Array.from) {
    return Array.from({ length }, (x, i) => (isFillerUndefined ? i : filler));
  }

  const arr = [];
  for (let i = 0; i < length; i++) {
    arr[i] = isFillerUndefined ? i : filler;
  }

  return arr;
}

module.exports = generateNewArray;
