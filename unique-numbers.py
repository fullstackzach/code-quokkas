"""
Two Distinct Elements
In each input list, every number repeats at least once, except for two.
Write a function that returns the two unique numbers.
Examples
returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]
returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]
returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]
Notes
Keep the same ordering in the output.
Source: https://edabit.com/challenge/yL5WmWTCNwwb4GnR7
"""

def returnUnique(arr):
  seenNumbers = []
  uniques = []
  for item in arr:
    if item in seenNumbers:
      if item in uniques:
        uniques.remove(item)
    else:
      seenNumbers.append(item)
      uniques.append(item)
  return uniques

print (returnUnique([1, 9, 8, 8, 7, 6, 1, 6]))
print (returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]))
print (returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]))