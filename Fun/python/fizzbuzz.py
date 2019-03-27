def fizzBuzz():
    num1 = int(input("Please enter a whole number: "))
    if num1 % 3 == 0:
        print ("Fizz")
    elif num1 % 5 == 0:
        print ("Buzz")
    elif num1 % 3 == 0 and num1 % 5 == 0: 
        print ("Fizz Buzz")
    else:
    print ("No Fizz Buzz")

fizzBuzz()
