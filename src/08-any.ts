(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = 'a';
  myDynamicVar = [];
  myDynamicVar = {};

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log('rta', rta);

  myDynamicVar = 123;
  const rta1 = (<number>myDynamicVar).toFixed();
  console.log('rta1', rta1);
})();
