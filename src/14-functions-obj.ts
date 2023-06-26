(() => {
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };

  login({
    email: 'milton@val.co',
    password: 1234,
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({
    title: 'Pro1',
    createAt: new Date(1993, 0, 1),
    stock: 12,
  });

  addProduct({
    title: 'Pro2',
    createAt: new Date(1995, 2, 10),
    stock: 12,
    size: 'M',
  });

  console.log(products);
})();
