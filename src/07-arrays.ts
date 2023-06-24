(() => {
  let prices: number[] = [1, 2, 3, 4, 5];
  prices.push(6, 7, 8);
  console.log(prices);

  let mixed: (number | string | boolean | object)[] = ['hola', true];
  mixed.push(12);
  mixed.push('a');
  mixed.push(false);
  mixed.push({ a: 2 });
  mixed.push([1, 2, 3]);

  console.log(mixed);
})();
