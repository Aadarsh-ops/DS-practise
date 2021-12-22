// averageSubArray(k,arr){
//   let result = [];
//   let sum = 0;
//   for(let i=0;i<arr.size()- k + 1;i++){
//     for(let j=i;j<i + k; j++){
//    sum += arr[j];


//    result.push(sum / k);
//   }
//   return result;
// }

// const result = averageSubArray(k,[12,4,5,6,7,8,5,4,4,4]);
// console.log(result); 
// console.log('lol');

function find_averages_of_subarrays(K, arr) {
  const result = [];
  for (let i = 0; i < arr.length - K + 1; i++) {
    // find sum of next 'K' elements
    sum = 0.0;
    for (let j = i; j < i + K; j++) {
      sum += arr[j];
    }
    result.push(sum / K); // calculate average
  }

  return result;
}


const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);