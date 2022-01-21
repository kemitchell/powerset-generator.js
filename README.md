```javascript
const powersetGenerator = require('powerset-generator');
const assert = require('assert');

// With arrays:
(() => {
  const next = powersetGenerator([0, 1, 2]) // function

  // Collect all subsets in an array by calling the function
  // until it returns `undefined`.
  const powerset = []
  while (true) {
    const subset = next()
    if (subset) powerset.push(subset)
    else break
  }

  assert.deepEqual(
    powerset,
    [[], [0], [1], [0, 1], [2], [0, 2], [1, 2], [0, 1, 2]]
  )

})();

// With Set objects:
(() => {
  const next = powersetGenerator(new Set([0, 1, 2]))
  
  const powerset = new Set()
  while (true) {
    const subset = next()
    if (subset) powerset.add(subset)
    else break
  }
  assert.deepEqual(
    powerset,
    new Set([
      new Set([]),
      new Set([0]),
      new Set([1]),
      new Set([0, 1]),
      new Set([2]),
      new Set([0, 2]),
      new Set([1, 2]),
      new Set([0, 1, 2])
    ])
  )
})()
```
