(() => {
  //   let myNumber: number = undefined;
  //   let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'hello';

  function hi(name: string | null) {
    let hello = 'hola ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }

    console.log(hello);
  }

  function hiV2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLowerCase() || null;

    console.log(hello);
  }

  hi('Milton');
  hi(null);

  hiV2('Milton');
  hiV2(null);
})();
