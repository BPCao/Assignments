numbers = [2, 1, 45, 67, 89, 4, 5, 7, 9]


def ascent(lst):
    for num in range(0, len(lst), 1):
        for index in range(num):
            if lst[index] > lst[index + 1]:
                temp = lst[index]
                lst[index] = lst[index+1]
                lst[index+1] = temp
    return lst


def descent(lst):
    for num in range(len(lst)-1, 0, -1):
        for index in range(num):
            if lst[index] < lst[index + 1]:
                temp = lst[index]
                lst[index] = lst[index+1]
                lst[index+1] = temp
    return lst


# def ascent(lst):
#     for num in range(0, len(lst), 1):
#         print(num)
#         if lst[num] > lst[num + 1]:
#             temp = lst[num]
#             lst[num] = lst[num+1]
#             lst[num+1] = temp
#     return lst
print(ascent(numbers))
print(descent(numbers))
