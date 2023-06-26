(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes,
  ) {
    return {
      title,
      createAt,
      stock,
      size,
    };
  }

  const product1 = createProductToJson('p1', new Date(), 12, 'XL');

  console.log(product1);
  console.log(product1.title);

  const createProductToJsonV2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes,
  ) => {
    return {
      title,
      createAt,
      stock,
      size,
    };
  };

  const product2 = createProductToJsonV2('p2', new Date(), 5);
  console.log(product2);
})();
