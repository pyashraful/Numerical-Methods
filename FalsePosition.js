function f(x) {
  return Math.pow(x, 3) - 5 * x - 9;
}

function falsePosition(a, b, e) {
  var step = 1;
  var condition = true;
  while (condition) {
    var x = a - ((b - a) * f(a)) / (f(b) - f(a));
    console.table(
      `step ${step}| a: ${f(a).toFixed(4)} | b: ${f(b).toFixed(
        4
      )} | x: ${x.toFixed(4)} | f(x): ${f(x).toFixed(4)}`
    );

    if (f(a) * f(b) < 0) {
      b = x;
    } else {
      a = x;
    }

    step = step + 1;
    if (Math.abs(f(x)) < e) {
      condition = false;
    } else {
      condition = true;
    }
  }
}

function main() {
  let a = 2;
  let b = 3;
  let e = 0.00001;
  if (f(a) * f(b) > 0.0) {
    console.log("worng guess");
    console.log("try again");
  } else {
    falsePosition(a, b, e);
  }
}
main();
