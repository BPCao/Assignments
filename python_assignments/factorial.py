def factorial():
    user_number = int(input("Please enter a number: "))
    total = 1
    while user_number > 0:
        total = total * user_number
        user_number = user_number - 1
    print(total)


PRINT
factorial()
