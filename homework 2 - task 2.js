const priceData = { Apples: '23.4', BANANAS: '48', oRAngGEs: '48.7584', };
function optimizer(data) {
   return Object.fromEntries( // зразу повертаємо значення і не додаємо зайвих змінних
      Object.entries(data).map(([key,value]) => [key.toLowerCase(), Number(value).toFixed(2)])
   );
};
let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData);
