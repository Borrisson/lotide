const countOnly = function(allItems, itemsToCount) {
  
  let output = {};
  
  for (let itemToCount in itemsToCount) { //object keys
    
    allItems.forEach((item) => { //iterates over items within array

      if (itemsToCount[itemToCount] && itemToCount === item) { //comfirms if items exist (and it's own) and true
        if (!output[item]) {
          output[item] = 1;
        } else {
          output[item]++;
        }
      }
    });

  }
  return output;
};
module.exports = countOnly;