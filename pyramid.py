
def pyramid():
    print ('*')
    counter = 0
    star = 1
    while counter < 9:
        print ('*' * (star + 2))
        counter += 1
        star += 2

pyramid()
