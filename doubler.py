lst = [1, 2, 3, 4, 5]

def doubler():
    new_lst = lst + lst
    return new_lst

new_lst = doubler()
print (new_lst)