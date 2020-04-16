/*
The Challenge
In this exercise, you're going to decompress a compressed string.
Your input is a compressed string of the format number[string] and the decompressed output form should be the string written number times. For example:
The input
3[abc]4[ab]c
Would be output as
abcabcabcababababc
Other rules
Number can have more than one digit. For example, 10[a] is allowed, and just means aaaaaaaaaa
One repetition can occur inside another. For example, 2[3[a]b] decompresses into aaabaaab
Characters allowed as input include digits, small English letters and brackets [ ].
Digits are only to represent amount of repetitions.
Letters are just letters.
Brackets are only part of syntax of writing repeated substring.
Input is always valid, so no need to check its validity.
Learning objectives
This question gives you the chance to practice with strings, recursion, algorithm, compilers, automata, and loops. It's also an opportunity to work on coding with better efficiency
Sample Inputs and Outputs
decompress('3[abc]') => 'abcabcabc'
decompress('3[abc]d') => 'abcabcabcd'
decompress('z3[abc]d') => 'zabcabcabcd'
decompress('3[abc]4[ab]c') => 'abcabcabcababababc'
decompress('10[a]') => 'aaaaaaaaaa'
decompress('2[3[a]b]') => 'aaabaaab'
decompress('0[abc]') => ''
https://techdevguide.withgoogle.com/paths/advanced/compress-decompression/#code-challenge
*/

const alpha = /^[a-zA-Z]$/
const numeric = /^[0-9]$/

const decompress = input => {
  const worker = (array) => {
    let multiplier = ''
    return array.reduce((acc, char, index, array) => {
      // console.log(array, char, myTurn, multiplier)
      if (char === '[') {
        // console.log(char, array, index)
        let isDone = false
        let nextArray = []
        const spliced = array.splice(index)

        spliced // ?
        do {
          let i = 0
          const brackets = []
          if (spliced[i] === '[') {
            brackets.push('[')
            nextArray.push(spliced[i])
          }
          brackets // ?
          isDone // ?
          if (spliced[i] === ']') {
            brackets.pop()
            if (brackets.length === 0) {
              isDone = true
              nextArray.push(spliced[i])
            }
          }
          if (brackets.length === 0) {
            isDone = true
          } else {
            nextArray.push(spliced[i])
          }
        } while (!isDone)
        nextArray // ?
        return acc + worker(spliced).repeat(multiplier) // ?
      }
      if (numeric.test(char)) {
        multiplier += char
        return acc
      }
      if (alpha.test(char)) {
        return acc + char
      }

      return acc
    }, [])
  }
  return worker(input.split(''))
}

decompress('3[abc]4[ab]c') // ?
// decompress('3[abc]') // ?
// decompress('3[abc]d') // ?
// decompress('z3[abc]d') // ?
// decompress('3[abc]4[ab]c') // ?
// decompress('10[a]') // ?
// decompress('2[3[a]b]') // ?
// decompress('0[abc]') // ?