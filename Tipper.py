def tip_calculator():
    bill = input("Please enter your bill amount: ")
    tip = input("Please enter your tip percent: ")
    tip_value = (float(bill) * (float(tip) * .01))
    print(f"Your tip amount is: {tip_value}")

tip_calculator()