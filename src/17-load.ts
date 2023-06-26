import _ from 'lodash';

const data = [
  {
    username: 'milton',
    role: 'admin',
  },
  {
    username: 'marina',
    role: 'seller',
  },
  {
    username: 'henrry',
    role: 'seller',
  },
  {
    username: 'alberto',
    role: 'costumer',
  },
];

const rta = _.groupBy(data, (item) => item.role);

console.log(rta);
