class Queue:
    def __init__(self):
        self.lst = []
        self.new_lst = []

    def enqueue(self, num):
        self.lst.insert(0, num)

    def dequeue(self):
        try:
            self.new_lst.append(self.lst[0])
            del self.lst[0]
        except IndexError:
            print("Value not present, please pick a valid index.")
