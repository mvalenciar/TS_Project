(() => {
  // literal types

  type UserID = string | number | boolean;
  let userId: UserID;

  function greeting(userId: UserID) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }

    if (typeof userId === 'number') {
      console.log(`number ${userId.toFixed(1)}`);
    }

    if (typeof userId === 'boolean') {
      console.log(`boolean ${userId}`);
    }
  }

  greeting('HOLA');
  greeting(1.587954);
  greeting(false);
})();
