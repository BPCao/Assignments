def factorial():
    num1 = int(input("Please enter a number: "))
    total = 1
    while num1 > 0:
        total = total * num1
        num1 = num1 - 1
    print (total)    

factorial()