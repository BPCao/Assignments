lst = [3, 4, 6, 1, 2, 7, 9, 0, 8]
new_lst = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

def missingnum():
    for num in lst:
        if num in range(10):
            new_lst.remove(num)
    return new_lst

missingnum()
print (new_lst)    
