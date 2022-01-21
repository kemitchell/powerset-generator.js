module.exports = set => {
  const setSize = set.length
  const powersetSize = Math.pow(2, setSize)
  let subsetCounter = 0
  return () => {
    if (subsetCounter >= powersetSize) return undefined
    const subset = []
    for (let elementCounter = 0; elementCounter < setSize; elementCounter++) {
      if ((subsetCounter & (1 << elementCounter)) > 0) {
        subset.push(set[elementCounter])
      }
    }
    subsetCounter++
    return subset
  }
}
