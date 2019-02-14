choice = ''
task_list = []
tasks = {} 

def menu():
    print ("Press 1 to add task: ")
    print ("Press 2 to delete task: ")
    print ("Press 3 to view all tasks: ")
    print ("Press q to quit: ")

def user_input1():
    user_task = input("Please enter a task: ")
    user_priority = input("Please enter a priority: ")
    tasks = {"Task name: " : user_task, "Task priority (HI, MED, LOW): " : user_priority}
    task_list.append(tasks)

def user_input2():
    user_input3()
    deleter = int(input("Please select a number to delete that task: "))
    deleter -= 1
    del task_list[deleter]

def user_input3():
    for index, task in enumerate(task_list, 1):
        print  (index, task["Task name: "], task["Task priority (HI, MED, LOW): "])

while choice != 'q':
    menu()
    choice = input("Please make your selection: ")
    if choice == '1':
        user_input1()
    elif choice == '2':
        user_input2()
    elif choice == '3':
        user_input3()
