let i = [1, 2, 3, 4];

let iterator = i[Symbol.iterator]();

let x = iterator.next();
console.log(x);
// { value: 1, done: false }
x = iterator.next();
// { value: 2, done: false }
console.log(x);

function * generator () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

let iterator2 = generator();

let x2 = iterator2.next();
console.log(x2);
// { value: 1, done: false }
x2 = iterator2.next();
// { value: 2, done: false }
console.log(x2);

// example 2
function * infiniteMaker () {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

let infinite = infiniteMaker();
console.log(infinite.next());
console.log(infinite.next());
console.log(infinite.next());
console.log(infinite.next());
console.log(infinite.next());
console.log(infinite.next());

// { value: 0, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: 5, done: false }