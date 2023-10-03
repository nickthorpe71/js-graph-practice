const memoizer = function (memo, formula) {
  const recur = function (n) {
    let result = memo[n];
    if (typeof result !== 'number') {
      result = formula(recur, n);
      memo[n] = result;
    };
    return result;
  };
  return recur;
};

const fibonacci = memoizer([0,1], function (recur, n) {
  return recur(n-1) + recur(n-2);
});

for (let i = 0; i < 10; i++) {
  console.log("i:", fibonacci(i));
}
