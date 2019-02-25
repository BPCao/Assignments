# with open("learning.python.txt") as file_object:
#     contents = file_object.read()
#     print(contents)
#     print(contents)
#     print(contents)

with open("learning.python.txt") as file_object:
    for line in file_object:
        print(line)


with open("learning.python.txt") as file_object:
    lines = file_object.readlines()

for line in lines:
    print(line)
