function sumFor(list) {
  let sum = 0;
  for (const i of list) {
    sum += i;
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;

  let i = 0;

  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list) {
  const listCopy = [].concat(list);
  if (list.length === 1) {
    return listCopy[0];
  }
  return listCopy[0] + sumRecursion(listCopy.splice(1));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, (memo, num) => memo + num, 0);
}

const list = [1, 2, 3, 4, 5, 6];
console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list));
console.log(sumTheSimpleWay(list));
