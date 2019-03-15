def isprime():
    x = int(input("Please enter an integer: "))
    if x < 2:
        print ("Number is not prime")
    elif x == 2:
        print ("Number is prime")
    else:
        for n in range(2, x-1):
            if x % n == 0:
                print ("Number is not prime")
            else:
                print ("Number is prime")
                break

isprime()