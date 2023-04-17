const minMaxInput = (input) => {
  const min = +input.target.min;
  const max = +input.target.max;
  let value = +input.target.value;

  if (value > max) {
    value = max;
  } else if (value < min) {
    value = min;
  }
  return value;
};

export default minMaxInput;
