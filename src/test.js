console.log('Hello World!')

function createRange (length, start = 0) {
  let result = [...Array(length + start).keys()].slice(start)
  console.log(result.length, result)
  return result
}

createRange(12)
createRange(12, 1)
createRange(12, 10)
