//3.1
function recursiveOddSumTo(number){
if (number === 1) {
    return number;
}
else if (number % 2 !== 0) {
    return number + recursiveOddSumTo(number-2);}
    return recursiveOddSumTo(number-1);
}
console.log(recursiveOddSumTo(10));
