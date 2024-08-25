class Solution:
    def romanToInt(self, s: str) -> int:
        roman_map = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000  
        }

        prev_value = 0
        total = 0

        for char in s:
            current_value = roman_map[char]

            if prev_value < current_value:
                total += current_value - 2 * prev_value
            else:
                total += current_value
            
            prev_value = current_value

        return total


s ="III"
solution =Solution()
print(solution.romanToInt(s)) 
