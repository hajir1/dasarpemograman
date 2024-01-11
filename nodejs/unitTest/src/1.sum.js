const Sum = (first, second) => {
  return first + second;
};
export default Sum;

export const sumAll = (numbers) => {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum;
  };
  
export const calculate = (numbers,callback) => {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    callback(sum)
  };

  