```javascript
const powersetGenerator = require('powerset-generator')

const next = powersetGenerator([0, 1, 2]) // function

// Collect all subsets in an array by calling the function
// until it returns `undefined`.
const powerset = []
while (true) {
  const subset = next()
  if (subset) powerset.push(subset)
  else break
}

require('assert').deepEqual(
  powerset,
  [[], [0], [1], [0, 1], [2], [0, 2], [1, 2], [0, 1, 2]]
)
```
