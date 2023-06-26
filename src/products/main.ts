import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'pro1',
  createAt: new Date(),
  stock: 3,
  size: 'S',
});

addProduct({
  title: 'pro2',
  createAt: new Date(),
  stock: 9,
  size: 'XL',
});

addProduct({
  title: 'pro3',
  createAt: new Date(),
  stock: 20,
  size: 'M',
});

console.log(products);
console.log(calcStock());
