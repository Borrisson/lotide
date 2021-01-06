const assertEqual = function(actual, expected) {
  return actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !==  ${expected}`);
};

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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);