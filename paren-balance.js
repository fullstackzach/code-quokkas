
const isBalanced = string => {
  const arr = string.split('')
  if (arr.length === 0) {
    return true
  }
  const stack = arr.reduce((acc, character) => {
    if (acc === undefined) {
      return acc
    }
    if (character === '(') {
      acc.push(character)
    }
    if (character === ')') {
      if (acc.pop() === undefined) {
        return undefined
      }
    }
    return acc
  }, [])

  if (stack === undefined) {
    return false
  }

  return stack.length === 0
}

isBalanced('(())') //?
isBalanced('(x+2)*(x-4)') //?
isBalanced('(x+2))*(x-4)') //?
isBalanced('(())') //?
isBalanced('((())') //?
isBalanced('((())-dfe))') //?
isBalanced('') // ?