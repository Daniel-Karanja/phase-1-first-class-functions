function receivesAFunction(fun) {
  fun();
}

function named() {}

function returnsANamedFunction() {
  let fn = function myfunc() {};
  return fn;
}

function returnsAnAnonymousFunction() {
  return () => {};
}
