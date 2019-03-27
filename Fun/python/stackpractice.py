class Stack:
    def __init__(self):
        self.lst = []
        self.new_lst = []

    def push(self, num):
        self.lst.append(num)

    def pop(self):
        try:
             self.new_lst.append(self.lst[-1])
            del self.lst[-1]
        except IndexError:
            print("Index not available, please print a valid index.")


stack = Stack()
stack.push(1)
stack.push(3)
stack.push(5)
print(stack.lst)
stack.pop()
stack.pop()
stack.pop()
stack.pop()
print(stack.lst)
