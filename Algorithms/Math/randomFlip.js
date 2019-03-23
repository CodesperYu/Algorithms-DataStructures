function randomNumGenerator() {
  let results = '';
  let flip = null;
  for (let i = 0; i < results.length; i++) {
    flip = Math.floor(Math.random() * 2).toString().then((result) => {
      console.log(result);
    });
    console.log(flip);
    results += flip;
  }
  console.log(results);
  if (results === '000' || results === '111' || results === '101') {
    return randomNumGenerator();
  }
  console.log(results);
  return results;
}

console.log(randomNumGenerator());
