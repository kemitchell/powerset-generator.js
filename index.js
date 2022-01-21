module.exports = set => {
  const isArray = Array.isArray(set)
  const setSize = isArray ? set.length : set.size
  const elementsArray = isArray ? set : Array.from(set)
  const powersetSize = Math.pow(2, setSize)

  let subsetCounter = 0
  return () => {
    if (subsetCounter >= powersetSize) return undefined
    const subset = isArray ? [] : new Set()
    for (let elementCounter = 0; elementCounter < setSize; elementCounter++) {
      if ((subsetCounter & (1 << elementCounter)) > 0) {
        const included = elementsArray[elementCounter]
        if (isArray) subset.push(included)
        else subset.add(included)
      }
    }
    subsetCounter++
    return subset
  }
}
