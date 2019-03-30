choice = ''

while choice != 'q':
    writer = input("Please enter a reason you like programming: ")
    with open("reasons.txt", "a") as record:
        record.write(writer)
