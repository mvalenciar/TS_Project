(() => {
  let userId: string | number;
  userId = 'hola';
  userId = 123;

  function greeting(mytext: string | number) {
    if (typeof mytext === 'string') {
      console.log(`string ${mytext.toLocaleLowerCase()}`);
    } else {
      console.log(`number ${mytext.toFixed(1)}`);
    }
  }

  greeting('Milton Valencia R');
  greeting(12.148752597124);
})();
