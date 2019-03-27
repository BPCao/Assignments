num1 = ""
num2 = ""
choice = ""


num1 = int(input("Please type an integer: "))
num2 = int(input("Please type an integer: "))
choice = input("Please select an operator: ")

calc = Calculator(num1, num2)

if choice == '+':
    calc.addition()
elif choice == '-':
    calc.subtraction()
elif choice == '*':
    calc.multiply()
elif choice == '/':
    calc.divide()
