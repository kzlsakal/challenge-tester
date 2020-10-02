const reverseArray = (array) => {
  const reversed = [];
  array.forEach((item) => reversed.unshift(item));
  return reversed;
}
