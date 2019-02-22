import json
from datetime import datetime
table_lst = []
choice = ""
time = datetime.now()
table_dict = []


class Table:
    def __init__(self, number):
        self.number = number
        self.empty = 'Not Occupied'
        self.time_start = ''
        self.time_end = ''
        self.playtime = ''
        self.date = f"{time.month} - {time.day} - {time.year}"
        self.record = {}

    def checkout(self):
        self.empty = 'Occupied'
        self.time_start = datetime.now()
        print(self.time_start)

    def checkin(self):
        self.empty = 'Not Occupied'
        self.time_end = datetime.now()
        print(self.time_end)
        self.playtime = self.time_end - self.time_start
        self.record = {"Table Number": self.number, "Time Start": str(self.time_start),
                       "Time End": str(self.time_end), "Total Playtime": str(self.playtime)}
        table_dict.append(self.record)
        with open(f"{self.date}.json", "w") as table_record:
            json.dump(table_dict, table_record, indent=2)
            print(self.record)


def show_menu():
    print("\n")
    print("Welcome to the pool hall!")
    print("Please select the number of the following: ")
    print("1. View all tables ")
    print("2. Request a table ")
    print("3. Checkout ")
    print("Press 'Q' to quit")


def view_tables():
    print("\n")
    for table in table_lst:
        if table.empty == 'Not Occupied':
            print(
                f"Table {table.number} -- {table.empty}")
        if table.empty == 'Occupied':
            print(
                f"Table {table.number} -- {table.empty} -- {table.time_start} -- {table.playtime}")


def request_table_menu():
    print("\n")
    print("Please select the number of an available table: ")
    print("\n")


for index in range(1, 13):
    table = Table(index)
    table_lst.append(table)


while choice != 'q':
    show_menu()
    choice = input("Please make your selection: ")
    if choice == '1':
        view_tables()
    if choice == '2':
        request_table_menu()
        view_tables()
        choice = int(input("Please make your selection: "))
        if table_lst[choice-1].empty == 'Occupied':
            print(
                f"Table {table_lst[choice].number} is occupied, please select an unoccupied table.")
        if table_lst[choice-1].empty == 'Not Occupied':
            table_lst[choice-1].checkout()
    if choice == '3':
        request_table_menu()
        view_tables()
        choice = int(input("Please make your selection: "))
        if table_lst[choice-1].empty == 'Not Occupied':
            print("Invalid table, please select an occupied table.")
        if table_lst[choice-1].empty == 'Occupied':
            table_lst[choice-1].checkin()
