
class Palindrome:
    def palindrome(self, word):
        empty = ''
        word = word.lower()
        reverse = len(word) - 1
        while reverse >= 0:
            empty = empty + word[reverse]
            reverse -= 1
        return reverse
        # if empty == word:
        #     print("This word is a palindrome")
        # else:
        #     print("This word is NOT a palindrome")
