(() => {
  let productTitle: string = 'Product 1';
  console.log(productTitle);

  let productDescription: string = 'I am Product 1';
  let productPrice: number = 100;
  let productInStock: number = 200;

  const summary = `
  Title: ${productTitle}
  Description: ${productDescription}
  Price: ${productPrice}
  Stock: ${productInStock}
  `;

  console.log('summary', summary);
})();
