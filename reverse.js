const args = process.argv;

args.slice(2).forEach(function(el) {
  let string = "";
  for(let i = el.length - 1; i >= 0; i--) {
    string += el[i];
  }
  console.log(string);
});