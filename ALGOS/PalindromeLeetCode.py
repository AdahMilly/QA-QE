# Given an integer x, return true if x is a 
# palindrome
# , and false otherwise.

 

# Example 1:

# Input: x = 121
# Output: true
# Explanation: 121 reads as 121 from left to right and from right to left.
# Example 2:

# Input: x = -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
# Example 3:

# Input: x = 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

# Constraints:

# -231 <= x <= 231 - 1
'''
12123121
1. create pointer at first 0(ith) and another pointer at index len-1(jth)
2. do while
3. Compare params at ith index and jth index
4. If they match, increment ith index, and decrement jth index
5. Repeat step 3
6. In any case, you find params not equal , then return false
7. If you the end of the array then return true
'''
def isPalindrome(x):
    xString = str(x)
    i_th = 0
    j_th = len(xString) - 1
    while i_th < j_th:
        if xString[i_th] != xString[j_th]:
            return False
        else:
            i_th += 1
            j_th -= 1
    return True

integer1 = 1
integer2 = 11
integer3 = 113
integer4 = -121

result1 = isPalindrome(integer1)
result2 = isPalindrome(integer2)
result3 = isPalindrome(integer3)
result4 = isPalindrome(integer4)

print(result1)
print(result2)
print(result3)
print(result4)
