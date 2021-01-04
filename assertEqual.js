const assertEqual = function(actual, expected) {
  return actual === expected ? console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected) : console.log("❌❌❌ Assertion Failed: " + actual + " !== " + expected);
};

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 2);