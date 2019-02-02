let fibonacci = function(n) {
  let sequence = [1, 1];
  if (n === 1) {
    return [sequence[0]];
  }
  else if (n === 2) {
    return sequence;
  }
  else {
    let seq = fibonacci(n-1);
    seq.push(seq[seq.length-1] + seq[seq.length - 2])
    return seq;
  }
};

module.exports.fibonacci = fibonacci;
