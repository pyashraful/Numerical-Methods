function f(x) {
  return Math.pow(x, 3) - 5 * x - 9;
}

function g(x) {
  return Math.pow(3 * x, 2) - 5;
}

function newtonRaphson(a, e, n) {
  var step = 1;
  var flag = 1;
  var condition = true;
  while (condition) {
    if (g(a) === 0.0) {
      console.log("Divided by zero");
      break;
    }

    var x = a - f(a) / g(a);
    console.log(
      `step: ${step} | a: ${a.toFixed(4)} | x: ${x.toFixed(4)} | f(x): ${f(
        x
      ).toFixed(4)}`
    );
    a = x;
    step = step + 1;

    if (Math.abs(f(x)) < e) {
      condition = false;
    } else {
      condition = true;
    }
    if (step > n) {
      flag = 0;
      break;
    }
  }
  if ((flag = 1)) {
    console.log("root is : ", x);
  } else {
    console.log("Not Convergent");
  }
}

function main() {
  let a = 2;
  let e = 0.00001;
  let n = 10;
  newtonRaphson(a, e, n);
}

main();
