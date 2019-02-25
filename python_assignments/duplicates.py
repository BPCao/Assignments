new_lst = []
names = ["Alex","John","Mary","Steve","John","Steve"]

def duplicates():
    for name in names:
            if name not in new_lst:
                    new_lst.append(name)             

duplicates()
print (new_lst)