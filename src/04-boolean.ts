(() => {
  let isEnable: boolean = true;
  isEnable = false;

  const random = Math.random();

  let isNew: boolean;
  isNew = random >= 0.5 ? true : false;
  console.log(isNew);
})();
