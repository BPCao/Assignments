def palindrome():
    empty = ''
    word = input("Please enter a word: ")
    reverse = len(word) - 1
    while reverse >= 0:
        empty = empty + word[reverse]
        reverse -= 1
    if empty == word:
        print ("This word is a palindrome")
    else:
        print ("This word is NOT a palindrome")

palindrome()